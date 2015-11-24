
module.exports = {
	entry: './test.js',
	output: {
	    path: __dirname,
	    filename: 'dist.js'
	},
    module: {
        loaders: [{
            test: /\.mcss$/,
            loader: 'style-loader!css-loader?sourceMap!../index.js?sourceMap'
        }]
    }
}