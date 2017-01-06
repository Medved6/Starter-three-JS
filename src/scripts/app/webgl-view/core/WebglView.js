		

	/**
	*
	*	INTERFACE|JS
	* 	-------------------
	*	DESC | Define WebGL main entry
	*	LOCATION | app > interface > scripts > core
	*
	*/



	/*--------- IMPORTS ----------*/

	import $ from 'jquery'
	import StoreModels from '@components/storemodels/StoreModels'


	import World from '@world/World'
	



	/*--------- REQUIRES ----------*/

	const THREE = require('three');



	/*--------- CLASS ----------*/


	class WebglView {


		constructor() {

			console.log('%c init Interface','color: pink');

			this.init();

		}


		init() {

			this.storeModels = new StoreModels();
			this.storeModels.launch(this.create.bind(this));

		}



		create() {

			this.world = new World();
			this.world.launch();


			let suzanne = this.storeModels.getItem('suzanne');
			let mesh = new THREE.Mesh(suzanne.geom, new THREE.MeshPhongMaterial());
			this.world.scene.add(mesh);
		}


	}



	export default WebglView;
	

