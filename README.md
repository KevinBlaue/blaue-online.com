# blaue-online

Personal static Next.js SPA for `blaue-online.com`.

## PDF Assets

The website resume, repository-only short resume, and architecture/delivery brief are generated with `lualatex`. Make sure a local LuaLaTeX installation is available before running the PDF scripts.

```bash
npm run pdf:resume
npm run pdf:resume:short
npm run pdf:resumes
npm run pdf:achievements
```

The long resume is written to `public/assets/kevin-blaue-resume.pdf` and is linked from the website. The one-page short resume is written to `documents/kevin-blaue-resume-short.pdf`; it is tracked in the repository but is not copied into the website's public assets.

LaTeX helper files such as `.aux`, `.log`, `.out`, and `.synctex.gz` are ignored repository-wide. The build script compiles in a temporary directory so only the requested PDF is copied into the project.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. Start editing the page in `src/app/page.tsx`.

The contact form selects its endpoint from the browser hostname:

- `localhost` or `127.0.0.1`: `http://localhost:8080/api/contact`
- other hosts: `https://api.bluestack.cloud/api/contact`

Override either default at build time with `NEXT_PUBLIC_CONTACT_ENDPOINT`:

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=https://example.com/api/contact npm run dev
```

## Dependency Updates

Dependabot checks npm dependencies monthly against the long-lived `dependencies` branch and GitHub Actions against `main`. Minor and patch npm updates are grouped; major updates get separate PRs.

CI runs lint, tests, and build once for every PR into `main` or `dependencies`. After all checks succeed, CI calls the reusable merge workflow for Dependabot PRs from this repository into `dependencies` only. This includes major updates. The merge verifies that the PR head still matches the tested commit. It uses a direct merge, so GitHub's optional auto-merge and Actions approval settings are not required; branch protection and required reviews still apply.

After changing shared workflows or build configuration on `main`, merge `main` into `dependencies`. Existing Dependabot PRs also need their branches updated to include those changes before they can run the new workflows. Review and merge a PR from `dependencies` into `main` to promote updates; the reset workflow then aligns `dependencies` with `main`.

## Deployment

Deployments are run locally on each host that serves the site from Nginx:

```bash
npm run deploy
```

The deploy script refuses to publish LaTeX helper files, builds the static export, syncs `out/` to `/var/www/html/blaue-online.com/`, validates and reloads Nginx, then checks the live root, social preview images, resume PDF, and architecture brief URLs for each configured host.

Per-host settings go in an untracked `.env` next to `package.json`; copy `.env.example` as a starting point. `SITE_ROOT` and `DEPLOY_URLS` default to `/var/www/html/blaue-online.com/` and the apex plus `www` hosts. A host that only serves `www` sets:

```bash
DEPLOY_URLS="https://www.blaue-online.com"
```

Variables exported in the shell override the values from `.env`.

## Social Preview

The shared social preview assets use Next.js metadata file conventions:

- `src/app/opengraph-image.png`
- `src/app/twitter-image.png`
- `src/app/opengraph-image.alt.txt`
- `src/app/twitter-image.alt.txt`

The editable source artwork is `tools/social-preview.svg`.
