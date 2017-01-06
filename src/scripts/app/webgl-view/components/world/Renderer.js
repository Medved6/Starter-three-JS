		

	/**
	*
	*	RENDERER|JS
	* 	-------------------
	*	DESC | Define class : renderer
	*	LOCATION | app > interface > components > world > Renderer.js
	*
	*/

	import $ from 'jquery';
	import Config from '@configs/WorldConfig';

	const THREE = require('three');


	/*--------- CLASS ----------*/

		

	class Renderer {


		constructor() {

			this.config = Config.get('renderer');
			this.create();

			return this.instance;
		}




		create() {

			this.instance = new THREE[this.config.build.type]( this.config.opt )
			this.instance.setSize(this.config.build.size.w,this.config.build.size.h)
			this.instance.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)

		}



		resize() {




		}


	}


	export default Renderer;
