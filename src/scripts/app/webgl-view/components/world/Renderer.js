		

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


		/**
		 * SINGLETON
		 */
		static instance;



		/**
		 * Constructor
		 * @return {Object} all construc Renderer
		 */
		constructor() {

			if(Renderer.instance) { return Renderer.instance; }
			else { Renderer.instance = this; }

			this.config = Config.get('renderer');
			this.create();

			return this.instance;
		}



		/**
		 * Create Three js renderer
		 * @return {Renderer} Renderer instance
		 */
		create() {

			this.instance = new THREE[this.config.build.type]( this.config.opt )
			this.instance.setSize(this.config.build.size.w,this.config.build.size.h)
			this.instance.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)

			return this;
		}	

	}


	export default Renderer;
