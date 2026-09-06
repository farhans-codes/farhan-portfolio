#!/bin/sh
# Optional hosting package: copies the site without compiling anything.
set -eu
cd "$(dirname "$0")/.."
mkdir -p dist/assets
cp index.html styles.css dist/
cp -R assets/. dist/assets/
printf '%s\n' 'Static site ready in dist/'
