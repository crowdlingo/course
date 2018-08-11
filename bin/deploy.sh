#!/usr/bin/env sh

# abort on errors
set -e

# build
# yarn docs:build
rm -rf docs
vuepress build src --dest docs

# navigate into the build output directory
# mv src/.vuepress/dist docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m 'deploy'
git push

# if you are deploying to https://<USERNAME>.github.io

# git push -f git@github.com:crowdlingo/course.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -