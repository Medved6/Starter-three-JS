		

	/**
	*
	*	LOADER-MANAGER|JS
	* 	-------------------
	*	DESC | Define utils : Loader manager
	*	LOCATION | app > frameworks > LoaderManager.js
	*
	*/

	
	/*--------- IMPORTS ----------*/



	const THREE = require('three');


	/*---------- CLASS -----------*/

	

	class LoaderManger {


		static instance;


		constructor() {

			if(LoaderManger.instance) return LoaderManger.instance
			else LoaderManger.instance = this

			this.instance 					 = new THREE.LoadingManager();
			this.instance.onProgress = this.onProgress.bind(this)
			this.instance.onLoad     = this.onLoad.bind(this)

			return this;
		}



		init(callback) {

			if( typeof callback != 'function') return

			this.callback = callback;

			return this;

		}




		onProgress(item,loaded,total) {
			console.log("%c" + loaded * 100 / total + "%", "font-size : 20px;");
		}


		onLoad() {

			this.callback();

			return this;

		}


	}



	export default LoaderManger;