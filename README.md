# my-pages

> My first vue project for github pages

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Deploy Commands

### code deploy
```
git checkout gh-pages
git push origin gh-pages
```
### gh-pages deploy
```
git checkout master
git subtree push --prefix docs origin master
``` 

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
