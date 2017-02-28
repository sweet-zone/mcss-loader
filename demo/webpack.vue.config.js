
module.exports = {
    entry: {
        './vue/dist': './vue/index'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    vue: {
        loaders: {
            mcss: 'vue-style-loader!css-loader!../../index.js'
        }
    }
};