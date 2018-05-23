const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.join(process.cwd(), 'lib/app.js'),
  // [
  //   'eventsource-polyfill', // Necessary for hot reloading with IE
  //   'webpack-hot-middleware/client',
  //   path.join(process.cwd(), 'lib/index.js'),
  // ],
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    // publicPath: '/',
    filename: 'bundle.js',
    // chunkFilename: 'bundle.chunk.js',
  },
  devServer: {
    contentBase: 'lib',
    hot: true
  },
  mode: 'development',
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: 'css-loader'
      // },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ],
    // loaders: [{
    //   test: /\.js$/, // Transform all .js files required somewhere with Babel
    //   loader: 'babel',
    //   exclude: /node_modules/
    // }, {
    //   test: /\.css$/,
    //   exclude: /node_modules/,
    //   loader: 'style-loader!css-loader'
    // }, {
    //   // Do not transform vendor's CSS with CSS-modules
    //   // The point is that they remain in global scope.
    //   // Since we require these CSS files in our JS or CSS files,
    //   // they will be a part of our compilation either way.
    //   // So, no need for ExtractTextPlugin here.
    //   test: /\.css$/,
    //   include: /node_modules/,
    //   loaders: ['style-loader', 'css-loader']
    // }, {
    //   test: /\.(eot|svg|ttf|woff|woff2|txt)$/,
    //   loader: 'file-loader'
    // }, {
    //   test: /\.(jpg|png|gif)$/,
    //   loaders: [
    //     'file-loader',
    //     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
    //   ],
    // }, {
    //   test: /\.html$/,
    //   loader: 'html-loader'
    // }, {
    //   test: /\.json$/,
    //   loader: 'json-loader'
    // }, {
    //   test: /\.(mp4|webm)$/,
    //   loader: 'url-loader?limit=10000'
    // }, {
    //   test: /\.(graphql|gql)$/,
    //   exclude: /node_modules/,
    //   loader: 'graphql-tag/loader'
    // }],
  },
  // ONLY enable noEmitOnErrors IN PROD, this prevents webpack bundle errors
  // from printing in browser console, and will execute code as well as it can
  // optimization: {
    // noEmitOnErrors: true
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new HtmlWebpackPlugin({
      // inject: true, this line happens by default so it's not needed
      // templateContent: '<html><body>hello</body></html>'

      // use template to refer to index.html file and get rid .ejs extension
      // put the script tag into the html file instead of inserting
      template: 'asdf.html',
    }),
  //   // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
  //   // inside your code for any environment checks; UglifyJS will automatically
  //   // drop any unreachable code.
  //   new webpack.LoaderOptionsPlugin({
  //     minimize: true,
  //     debug: false,
  //     options: {
  //       babel: {
  //         babelrc: false,
  //         cacheDirectory: '/tmp/',
  //         "presets": [
  //           "react",
  //           ["latest", { "modules": false }],
  //           "stage-0",
  //         ],
  //         env: {
  //           development: {
  //             "plugins": [
  //               ["react-transform", {
  //                 "transforms": [{
  //                   "transform": "react-transform-hmr",
  //                   "imports": ["react"],
  //                   "locals": ["module"]
  //                 }, {
  //                     "transform": "react-transform-catch-errors",
  //                     "imports": ["react", "redbox-react"]
  //                   }]
  //               }],
  //               "transform-runtime",
  //               "add-module-exports",
  //               "transform-class-properties"
  //             ]
  //           },
  //           production: {
  //             "plugins": [
  //               "transform-runtime",
  //               "add-module-exports",
  //               "transform-class-properties"
  //             ]
  //           }
  //         }
  //       }
  //     }
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  //       FONT_KEY: JSON.stringify(process.env.FONT_KEY)
  //     },
  //   }),
  ],
  resolve: {
    // modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      // '.jsx',
      // '.react.js',
    ],
    // mainFields: [
    //   'module'
    // ],
  },
  devtool: '#eval-source-map',
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: 'verbose'
}
