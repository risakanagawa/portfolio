const path = require('path');

module.exports = {
  entry: "./src/components/app.js",
  output: {
    path: path.join(__dirname, "build/components"),
    filename: "app-compiled.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
