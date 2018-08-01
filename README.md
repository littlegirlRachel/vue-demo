# tsinghua

> A Vue.js project

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#### 几点注意事项
1.配置 alias '/goback'
  '/'不能丢
2.alias & redirect 区别
redirect url改变
alias  url还是原来定义的，只是内容发生了变化
3. alias 不能配置在跟路径下
```
{
  path: '/',
  component: Hello,
  alias:'/home'
}
```
<router-view></router-view>
