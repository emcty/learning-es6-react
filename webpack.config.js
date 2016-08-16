module.exports = {
    entry: {
    	index:"./src/app/index.js" //若把index:"./src/index.js"则运行我普通的index文件。
    },
    output: {
        path: './build',
        filename: "[name].js"
    },
    watch: true,
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader']
        }
      ]
    },
    devServer: {
      progress:true,
      hot:true,
      historyApiFallback:true,
      stats: { colors: true },
      port: 8080,
      contentBase: 'build'
    }
};