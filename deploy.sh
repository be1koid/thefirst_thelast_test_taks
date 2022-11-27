#!/usr/bin/env sh

set -e

npm run build

cd docs

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:be1koid/thefirst_thelast_test_taks.git master:gh-pages

cd -