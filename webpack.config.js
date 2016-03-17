// [name] under the output section denotes the entry prop names
module.exports = {
  entry: {
   dev_bundle: ['webpack/hot/dev-server', './main.js'],
   dist: ['./main.js']
  },
  output: {
    path: './',
    filename: 'build/[name].drawer.js'
  },
  contentBase: "./demo", // for webpack dev server
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: /node_modules/
      }
    ]
  }
};
