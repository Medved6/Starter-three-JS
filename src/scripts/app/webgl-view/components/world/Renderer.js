		

	/**
	*
	*	RENDERER|JS
	* 	-------------------
	*	DESC | Define class : renderer
	*	LOCATION | app > interface > components > world > Renderer.js
	*
	*/

	import $ from 'jquery';

	const THREE = require('three');


	/*--------- CLASS ----------*/

		

	class Renderer {


		constructor(opt) {

			this.params = opt;
			this.create();

			return this.instance;
		}




		create() {

			this.instance = new THREE[this.params.build.type]( this.params.opt )
			this.instance.setSize(this.params.build.size.w,this.params.build.size.h)
			this.instance.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)

		}



		resize() {




		}


	}


	export default Renderer;
