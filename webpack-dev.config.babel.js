		

	/**
	*
	*	WEBPACK-DEV.CONFIG|JS
	* 	-------------------
	*	DESC | Define dev config
	*	LOCATION | webpack-dev.config.babel.js
	*
	*/

	
	/*--------- IMPORTS ----------*/

	import CONFIG from './webpack-base.config.babel'
	import webpack from 'webpack';
	import HtmlWebpackPlugin from 'html-webpack-plugin';



	/*---------- CLASS -----------*/





	let serverConfig = {

	  contentBase: './',
	  port: 8080,
	  host: '0.0.0.0',
	  progress: true,
	  historyApiFallback: {
      index: '/index.html'
    }

	};


	let devLoaders = [
		{ test: /\.scss$/, loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]}
	];


	let devPlugins = [
	 	new webpack.HotModuleReplacementPlugin(), 
		new HtmlWebpackPlugin({
	    inject: 'body',
	    template : './index.html'
	  }),  	 
	]



	// INIT SERVER
	CONFIG.devServer = serverConfig;

	// ADD DEV LOADERS
	CONFIG.module.loaders = CONFIG.module.loaders.concat(devLoaders);
	
	// ADD DEV PLUGINS
	CONFIG.plugins = CONFIG.plugins.concat(devPlugins);



	export default CONFIG;



