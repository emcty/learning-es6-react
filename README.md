#webpack打包
##进行webpack.config.js的配置
*entry
*output
*在module中配置->loaders
##package.json的配置
*react react-dom
*babel相关插件
*babel-plugin-transform-class-properties  --转译es6中class中的属性
```
 npm install
 
```
.babelrc 只添加依赖的
```
{
  "presets": ["es2015", "react"],
  "plugins": ["transform-class-properties"]
}
```


