		

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

	

	class LoaderManager {


		/**
		 * Singleton
		 */
		static instance;


		/**
		 * Consctrucot
		 * @return {LoaderManager} LoaderManager instance
		 */
		constructor() {

			if(LoaderManager.instance) return LoaderManager.instance
			else LoaderManager.instance = this

			this.instance 					 = new THREE.LoadingManager();
			this.instance.onProgress = this.onProgress.bind(this)
			this.instance.onLoad     = this.onLoad.bind(this)

			return this;
		}


		/**
		 * Init Loader
		 * @param  {Function} callback Function which will be called after load
		 * @return {LoaderManager} LoaderManager instance
		 */
		init(callback) {

			if( typeof callback != 'function') { throw new Error("Callbackis not a function"); }

			this.callback = callback;
			return this;

		}


		/**
		 * Loaders progress
		 * @param  {String} item   loaded item's name
		 * @param  {Integer} loaded Amount of loaded item
		 * @param  {Integer} total  Total of required item
		 * @return {LoaderManager}  LoaderManager instance
		 */
		onProgress(item,loaded,total) {
			console.log("%c" + loaded * 100 / total + "%", "font-size : 20px;");
			return this;
		}



		/**
		 * Loader onLoad function
		 * @return {LoadedManager} LoaderManager instance
		 */
		onLoad() {
			this.callback();
			return this;
		}


	}



	export default LoaderManager;