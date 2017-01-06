		

	/**
	*
	*	WEBPACK-PROD.CONFIG|JS
	* 	-------------------
	*	DESC | Define prod config
	*	LOCATION | webpack-prod.config.babel.js
	*
	*/

	
	/*--------- IMPORTS ----------*/

	import CONFIG from './webpack-base.config.babel'
	import webpack from 'webpack';
	import path from 'path';
	import ExtractTextPlugin from 'extract-text-webpack-plugin';



	const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;




	/*---------- CLASS -----------*/

	let prodOutput = {
		path : path.join(__dirname, './dist/scripts'),
		filename : 'bundle.js'
	};

	let prodLoaders = [
		{
			test: /\.scss$/,
    	loader: ExtractTextPlugin.extract(
    		'style-loader',
    		'css?sourceMap!sass?sourceMap'
    	)
		}
	];


	let prodPlugins = [
		new ExtractTextPlugin('../styles/app.css'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    // new BundleAnalyzerPlugin()
	]


	// INIT OUTPUT
	CONFIG.output = prodOutput;

	// ADD DEV LOADERS
	CONFIG.module.loaders = CONFIG.module.loaders.concat(prodLoaders);
	
	// ADD DEV PLUGINS
	CONFIG.plugins = CONFIG.plugins.concat(prodPlugins);



	export default CONFIG;



