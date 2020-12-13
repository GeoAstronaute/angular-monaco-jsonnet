const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin-with-jsonnet");

module.exports = {
  entry: {
    "editor.worker": "monaco-editor/esm/vs/editor/editor.worker.js",
    "jsonnet.worker": "monaco-jsonnet/release/esm/jsonnet.worker.js",
    jsonnetMode: "monaco-jsonnet/release/esm/jsonnetMode.js"
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.ttf$/,
      use: ['file-loader']
    }]
  },
  plugins: [new MonacoWebpackPlugin({
    languages: ['javascript','typescript','css','html','json']
  })]
};
