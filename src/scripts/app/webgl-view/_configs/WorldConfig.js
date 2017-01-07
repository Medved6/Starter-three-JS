		

	/**
	*
	*	CONFIG|JS
	* 	-------------------
	*	DESC | Define all webgl environment settings
	*	LOCATION | interface > scripts > components > Config.js
	*
	*/


	import $ from 'jquery'

	const THREE  = require('three');
	const HEIGHT = $(window).height();
	const WIDTH  = $(window).width();

	/*--------- CLASS ----------*/







	const Config = Object.freeze({


		// DEFINE DOM
		container : $('#webgl-container'),



		// DEFINE CAMERA SETTINGS
		camera : [
		{
			name : "main",
			build : {
				type: 'PerspectiveCamera',
				fov : 60,
				ratio : WIDTH / HEIGHT,
				near : 1,
				far : 2000
			},
			position : {
				x : 0,
				y : 5,
				z : 10
			},
			target : new THREE.Vector3(0,0,0)
		}
		],



		// DEFINE RENDERER SETTINGS
		renderer : {
			build : {
				type : 'WebGLRenderer',
				size : {
					w : WIDTH,
					h : HEIGHT
				}
			},
			opts : {
				alpha : true,
				antialisaing : true
			} 
		},



		// DEFINE LIGHTS SETTINGS

		//// Main light
		lights : [
			{
				name: 'main',
				type: 'HemisphereLight',
				params: [
					{
						type : 'color',
						name : 'color',
						value : 0xfcfffd
					},
					{
						type : 'color',
						name : 'groundColor',
						value : 0x551222
					},
					{
						type : 'setting',
						name : 'intensity',
						value : 0.5
					}
				],
				position: {
					x: 0,
					y: 0,
					z: 0,
				}
			},


			//// Shadow Light
			{
				name : 'shadow',
				type : 'DirectionalLight',
				params : [
					{
						type : 'color',
						name : 'color',
						value : 0xfae8a9
					},
					{
						type : 'setting',
						name : 'intensity',
						value : .8
					},
					{
						type : 'setting',
						name : 'castShadow',
						value : true
					},
					{
						type : 'setting',
						name : 'shadowDarkness',
						value : .2
					}
				],
				position: {
					x: 200,
					y: 200,
					z: 200,
				}
			},


			//// Back Light
			{
				name : 'back-light',
				type : 'DirectionalLight',
				params : [
					{
						type : 'color',
						name : 'color',
						value : 0xe7eeff
					},
					{
						type : 'setting',
						name : 'intensity',
						value : .4
					}
				],
				position: {
					x: -100,
					y: 200,
					z: 50,
				}
			}
		] 

	})






	module.exports =  {

		get(name = null) {
			if( !name ) return Config;
			else return Config[name]	
		}

	}


