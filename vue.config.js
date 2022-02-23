// const webpack = require('webpack');
// const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            // new copyWebpackPlugin([
            //     { from: 'wecode.json', to: './' },
            // ]),
            // new webpack.ProvidePlugin({
            //     $:'jquery',
            //     jQuery:'jquery',
            //     'windows.jQuery':'jquery'
            // })
        ]
    }
};