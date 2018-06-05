const express = require('express')
const app = express()
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')

const compiler = webpack(webpackConfig)
const middleware = webpackDevMiddleware(compiler)
app.use(middleware)

app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../lib/index.html'));
});

app.get('/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/../lib/bundle.js'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
