yarn docs:build
cd ./docs/.vuepress/dist
git init
git add -A
git commit -m'deploy'
# git push -f git@github.com:GitAlphabet/blog.git master:gh-page
git push -f git@github.com:GitAlphabet/GitAlphabet.github.io.git master