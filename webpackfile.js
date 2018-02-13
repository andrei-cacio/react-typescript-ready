const path = require('path');

module.exports = {
	entry: './index.ts',
	output: {
	 	path: path.resolve(__dirname, 'dist'), 
	 	filename: 'bundle.js',
	},

	resolve: {
	    extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

	module: {
		rules: [
			{ 
				test: /\.ts/, 
				use: 'awesome-typescript-loader',
			},
		]
	}
};


