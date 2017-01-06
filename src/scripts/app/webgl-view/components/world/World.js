		

	/**
	*
	*	WOLRD|JS
	* 	-------------------
	*	DESC | Define Webgl environment
	*	LOCATION | interface > scripts > components > world > World.js
	*
	*/


	/*--------- IMPORTS ----------*/

	import $ from 'jquery'
	import Config from '@configs/WorldConfig'
	import Ticker from '@frameworks/Ticker'
	import Viewport from '@frameworks/Viewport'


	import Renderer from './Renderer'
	import Camera from './Camera'
	import LightManager from './LightManager'



	const THREE = require('three')

	/*---------- CLASS -----------*/

	

	



	class World {


		static instance;

	
		constructor() {

			if(World.instance) return World.instance;
			else World.instance = this;

			this.viewport = new Viewport();
			this.config = Config.get();
			this.ticker = new Ticker();

			this.create();

			return this;

		}



		create() {

			// Add scene
			this.scene =  new THREE.Scene();

			// Add renderer
			this.renderer = new Renderer(this.config.renderer);

			// Add camera
			this.camera = new Camera('main', this.config.camera);
			
			// Add DOM container
			this.container = this.config.container;
			this.container.append(this.renderer.domElement);
			
			// Add lights
			this.lights = new LightManager();
			this.scene.add(this.lights.treeGroup);

			window.addEventListener('resize',this.resize.bind(this));

		}

		resize() {
   		 // Update camera
    	this.camera.aspect = window.innerWidth / window.innerHeight;
    	this.camera.updateProjectionMatrix();

    	//update camera
    	this.renderer.setSize( window.innerWidth, window.innerHeight);

    	return this;

		}


		launch() {
			this.ticker.tick('render',this.loop.bind(this))
		}



		loop() {
			this.renderer.render(this.scene, this.camera);
		}


	}




	export default World;
