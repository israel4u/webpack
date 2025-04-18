const path = require('path')
const HtmlpackPlugin = require ('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
    
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    port: 3000,
    open: true,
    hot: true,
    // host: "local-ip",
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlpackPlugin ({
      title: 'Shola Israel | UI/UX & Web Developer',
      filenmae: 'index.html',
      template: 'src/template.html',
    }),
    // new BundleAnalyzerPlugin(),
  ]
}