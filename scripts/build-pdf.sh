#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 || $# -gt 2 || "$1" != *.tex ]]; then
  echo "Usage: $0 tools/document.tex [output-directory]" >&2
  exit 2
fi

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_PATH="$1"
DOCUMENT_NAME="$(basename "${SOURCE_PATH%.tex}")"
OUTPUT_DIR="${2:-public/assets}"
TEMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/blaue-online-pdf.XXXXXX")"
TEX_CACHE_DIR="$TEMP_DIR/texmf-var"

cleanup() {
  rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

cd "$PROJECT_ROOT"
mkdir -p "$TEX_CACHE_DIR"
export TEXMFVAR="$TEX_CACHE_DIR"
export TEXMFCACHE="$TEX_CACHE_DIR"

if [[ ! -f "$SOURCE_PATH" ]]; then
  echo "PDF source not found: $SOURCE_PATH" >&2
  exit 2
fi

mkdir -p "$OUTPUT_DIR"

lualatex \
  --interaction=nonstopmode \
  --halt-on-error \
  --output-directory="$TEMP_DIR" \
  "$SOURCE_PATH"

install -m 0644 "$TEMP_DIR/$DOCUMENT_NAME.pdf" "$OUTPUT_DIR/$DOCUMENT_NAME.pdf"
echo "Created $OUTPUT_DIR/$DOCUMENT_NAME.pdf"
