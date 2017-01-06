
	/**
	*
	*	STOREMODEL|JS
	* 	-------------------
	*	DESC | Define 3d model store
	*	LOCATION | app > interface > components > storemodels > StoreModel.js
	*
	*/

	
	/*--------- IMPORTS ----------*/


	import $ from 'jquery';
	import _ from 'lodash';
	import MeshLoader from '@utils/MeshLoader';
	import LoaderManager from '@utils/LoaderManager';


	const MODELS = require('@configs/models.json');
	const THREE  = require('three');

	/*---------- CLASS -----------*/





	class StoreModels {


		static instance;

		constructor() {



			if (StoreModels.instance) return StoreModels.instance;
			else StoreModels.instance = this


			this.items  = [];
			this.toLoad = MODELS.models;
			this.url = MODELS.url;
			this.length = this.toLoad.length;

			return this;
			
		}




		launch(callback) {

			if( typeof callback != 'function') return


			this.callback = callback;
			this.manager = new LoaderManager();
			this.manager.init(this.callback.bind(this));
			this.loader = new MeshLoader(this.manager.instance);
			
			this.load();

		}



		load() {
			_.map(this.toLoad, (model,index) => {
				if(this.items[model.name]){ return false; }
				this.loader.load(this.url, model.name, model.type, this.itemLoaded.bind(this))
			})
		}


		itemLoaded(mesh) {
			this.items[mesh.name] = mesh;
		}

		getItem(name) {
			return this.items[name];
		}


	}




	export default StoreModels
	
