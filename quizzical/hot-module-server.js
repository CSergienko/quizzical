/**
 * Created by peterringelmann on 2016/07/12.
 */
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    'contentBase': 'react/',
    'publicPath': '/static/bundles/',
    'hot': true,
    'inline': true,
    'historyApiFallback': true,
    'quiet': false,
    'noInfo': false,
    //'lazy': true,
    'filename': 'main.js',
    'watchOptions': {
        'aggregateTimeout': 300,
        'poll': 1000
    },
    'headers': { 'X-Custom-Header': 'yes' },
    'stats': { 'colors': true }
}).listen(3000, '0.0.0.0', function(err, result){
    if (err) {
        console.log(err)
    }

    console.log('Listening at 0.0.0.0:3000')
})