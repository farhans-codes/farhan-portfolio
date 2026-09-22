#!/bin/sh
# Validate and create a clean static hosting package.
set -eu
cd "$(dirname "$0")/.."
test -f index.html
test -d assets
python3 scripts/check_site.py
if [ -d dist ]; then
  find dist -depth -delete
fi
mkdir -p dist/assets
cp index.html styles.css dist/
cp -R assets/. dist/assets/
find dist/assets/images -maxdepth 1 -name farhan-portrait.png -delete
python3 scripts/check_site.py dist
printf '%s\n' 'Validated static site ready in dist/'
