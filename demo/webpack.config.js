
module.exports = {
    entry: {
        './normal/dist': './normal/index',
        './options/dist': './options/index'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.mcss$/,
            loader: 'style-loader!css-loader!../../index.js?include=./include'
        }]
    }
};