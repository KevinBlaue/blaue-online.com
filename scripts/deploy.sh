#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Per-host settings live in an untracked .env (see .env.example). Variables
# already set in the shell take precedence over values from the file.
if [[ -f .env ]]; then
  while IFS='=' read -r key value || [[ -n "${key}" ]]; do
    [[ -z "${key}" || "${key}" == \#* ]] && continue
    value="${value%\"}"
    value="${value#\"}"
    [[ -z "${!key+x}" ]] && export "${key}=${value}"
  done < .env
fi

SITE_ROOT="${SITE_ROOT:-/var/www/html/blaue-online.com}"
# Space-separated URLs to smoke-test after deploying. Defaults to the
# apex and www hosts; set DEPLOY_URLS in .env on hosts that serve only www.
DEPLOY_URLS="${DEPLOY_URLS:-https://blaue-online.com https://www.blaue-online.com}"

LATEX_ARTIFACTS="$(find public/assets -maxdepth 1 -type f \( -name '*.aux' -o -name '*.log' -o -name '*.out' -o -name '*.synctex.gz' \) -print)"
if [[ -n "${LATEX_ARTIFACTS}" ]]; then
  echo "Refusing to deploy LaTeX build artifacts from public/assets:" >&2
  echo "${LATEX_ARTIFACTS}" >&2
  exit 1
fi

echo "Building static export..."
npm run build

echo "Syncing out/ to ${SITE_ROOT}..."
sudo rsync -a --delete out/ "${SITE_ROOT}/"

echo "Validating and reloading Nginx..."
sudo nginx -t
sudo systemctl reload nginx

echo "Checking live URLs..."
deploy_ref="$(git rev-parse --short HEAD)"
for base_url in $DEPLOY_URLS; do
  curl -fsSI --max-time 15 "${base_url}/" >/dev/null
  curl -fsSI --max-time 15 "${base_url}/opengraph-image.png?deploy=${deploy_ref}" >/dev/null
  curl -fsSI --max-time 15 "${base_url}/twitter-image.png?deploy=${deploy_ref}" >/dev/null
  curl -fsSI --max-time 15 "${base_url}/assets/kevin-blaue-resume.pdf?deploy=${deploy_ref}" >/dev/null
  curl -fsSI --max-time 15 "${base_url}/assets/kevin-blaue-achievements.pdf?deploy=${deploy_ref}" >/dev/null
done

echo "Deployment complete: ${DEPLOY_URLS}"
