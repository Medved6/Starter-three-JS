		

	/**
	*
	*	VIEWPORT|JS
	* 	-------------------
	*	DESC | Define Viewport behavior
	*	LOCATION | src > scripts > framework
	*
	*/

	
	/*--------- IMPORTS ----------*/


	import $ from 'jquery';

	/*---------- CLASS -----------*/

	


	class Viewport {


		static instance


		constructor() {

			if(Viewport.instance) return this
			else Viewport.instance = this


			this.set();

			return this;


		}




		set() {

			this.w = $(window).width()
			this.h = $(window).height()

		}

	}



	export default Viewport;