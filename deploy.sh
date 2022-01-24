npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:onomatopoetica/vue-i18n-demo.git vue-i18n-demo:gh-pages

cd -