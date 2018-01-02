const config = {
    entry: ['./app/index.js'],
    output: {
      path: __dirname + '/build',
      filename: 'game-lib.js'
    },
    module: {
      loaders: [
        {
          loader:'babel-loader',
          test: /\.js$/,
          exclude:  /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    devServer:{
      port: 3000,
      contentBase: __dirname + '/build',
      inline: true
    }
}
module.exports = config;
