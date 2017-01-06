		

	/**
	*
	*	WEBPACK.CONFIG|JS
	* 	-------------------
	*	DESC | description
	*	LOCATION | path
	*
	*/

	

	import webpack from 'webpack';
	import path from 'path';
	import autoprefixer from 'autoprefixer';
	import ModernizrWebpackPlugin from 'modernizr-webpack-plugin';



	var config = {
	  'feature-detects': [
	    'input',
	    'canvas',
	    'css/resize'
	  ]
	}




	let defaultConfig = {

		entry : {
			app : ['./src/scripts/app/App.js','./src/styles/app.scss']
		},

		module: {
	    loaders: [
	      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
	      { test: /\.json$/, loader: 'json' },
	    ],
	  },

	  resolve: {
	    extensions: ['', '.js', '.scss', '.json']
	  },

	  plugins: [
	    new webpack.DefinePlugin({
	      'process.env': { 'NODE_ENV': JSON.stringify('production') },
	    }),
	    new ModernizrWebpackPlugin(config)
	  ],

	  devtool: 'inline-source-map',
	 
	}



	export default defaultConfig;





