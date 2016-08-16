#webpack打包
##进行webpack.config.js的配置
+ entry
+ output
+ 在module中配置->loaders
##package.json的配置
* react react-dom
* babel相关插件
* babel-plugin-transform-class-properties  --转译es6中class中的属性
```
 npm install
 
```
.babelrc 只添加依赖的
```
{
  "presets": ["es2015", "react","stage-0"],
  "plugins": ["transform-class-properties"]
}
```
### 1期.第一次用react开始项目
将entry:
```
entry: {
    index:"./src/index.js" 
}
```
需要用webpack打包的源地址为src/index.js，此js只做了一个普通的reactdemo，以熟悉react。
### 2期.配合react-router,引用路由，就可以开始single page啦。。。。
```
entry: {
    index:"./src/app/index.js" 
}
```
路由设置在app/routes/index.js中
页面在app/containers/下
### 3期.引入redux,敬请期待。

