		

	/**
	*
	*	WOLRD|JS
	* 	-------------------
	*	DESC | Define Webgl environment
	*	LOCATION | interface > scripts > components > world > World.js
	*
	*/


	/*--------- IMPORTS ----------*/

	import $ from 'jquery';
	import Config from '@configs/WorldConfig';
	import Ticker from '@frameworks/Ticker';

	import Renderer from './Renderer';
	import Camera from './Camera';
	import LightManager from './LightManager';



	const THREE = require('three');

	/*---------- CLASS -----------*/

	

	



	class World {


		static instance;

		
		/**
		 * Constructor
		 * @return {World} World instance
		 */
		constructor() {

			if(World.instance) return World.instance;
			else World.instance = this;

			this.config = Config.get();
			this.ticker = new Ticker();

			this.create();

			return this;

		}


		/**
		 * Create World
		 * @return {World} World instance
		 */
		create() {

			// Add scene
			this.scene =  new THREE.Scene();

			// Add renderer
			this.renderer = new Renderer();

			// Add camera
			const camera = new Camera();
			this.mainCamera = camera.add("main");

			// Add DOM container
			this.container = this.config.container;
			this.container.append(this.renderer.domElement);
			
			// Add lights
			this.lights = new LightManager();
			this.scene.add(this.lights.treeGroup);

			// init events listener
			window.addEventListener('resize',this.resize.bind(this));

			return this;

		}


		/**	
		 * Update camera & renderer canvas when resize event is triggered
		 * @return {World} World instance
		 */
		resize() {
    	this.mainCamera.aspect = window.innerWidth / window.innerHeight;
    	this.mainCamera.updateProjectionMatrix();
    	this.renderer.setSize( window.innerWidth, window.innerHeight);
    	return this;
		}


		/**
		 * Launch world renderer
		 * @return {World} World instance
		 */
		launch() {
			this.ticker.tick('render',this.loop.bind(this));
			return this;
		}


		/**
		 * Renderer Canvas at each frame
		 * @return {World} World instance
		 */
		loop() {
			this.renderer.render(this.scene, this.mainCamera);
			return this;
		}


	}




	export default World;
