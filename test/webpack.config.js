
module.exports = {
	entry: './test.js',
	output: {
	    path: __dirname,
	    filename: 'dist.js'
	},
    module: {
        loaders: [{
            test: /\.mcss$/,
            loader: 'style-loader!css-loader?sourceMap!../index.js?include=./include'
            // loader: 'style-loader!css-loader?sourceMap!../index.js?'+JSON.stringify({
            //     format: 1,
            //     pathes:[
            //         './mcss',
            //         './mcss/subMcss'
            //     ],
            //     importCSS: false,
            //     indent: '\t',
            //     sourceMap: 1
            // })
        }]
    }
};