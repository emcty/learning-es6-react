module.exports = {
    entry: {
    	index:"./src/index.js"
    },
    output: {
        path: './bulid',
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
    }
  	// },
   //  devServer: {
   //    progress:true,
   //    stats: { colors: true },
   //    port: 8080,
   //    contentBase: 'build'
   //  }
};