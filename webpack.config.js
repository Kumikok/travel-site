var path = require('path');

module.exports = {
	entry: "./app/assets/script/app.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/script"),
		filename: "app-compiled.js"
	},
	module: {
		loaders: [{
				loader: 'babel-loader',
				query: {
					presets: ['env']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}]
	}

}