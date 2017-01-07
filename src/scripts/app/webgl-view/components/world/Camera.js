		

	/**
	*
	*	CAMERA|JS
	* 	-------------------
	*	DESC | Define class : camera
	*	LOCATION | src > scripts > components > world
	*
	*/

	import Config from '@configs/WorldConfig';
	import _ from "lodash";

	const THREE = require('three');


	/*--------- CLASS ----------*/

		

	class Camera {

		static instance;

		constructor() {

			if( Camera.instance ) { return Camera.instance; }
			else { Camera.instance = this; }

			this.config = Config.get('camera');
			this.cache = [];

			return this.instance;
		}





		add(name) {

			if(this.cache[name]){ return this.cache[name]; }

			const index = _.findIndex(this.config,{name:name});
			if( index === -1) return false;

			const camera = this.create(this.config[index]);

			return camera;
		}


		create(params) {

			let instance = new THREE[params.build.type](
				params.build.fov,
				params.build.ratio,
				params.build.near,
				params.build.far
			);

			instance.name = params.name;
			instance.position.set(params.position.x,params.position.y,params.position.z)
			instance.lookAt(params.target);

			this.cache[params.name] = instance;

			return instance;
		}


		get(name) {
			if(!this.cache[name]) { return false; }
			else { return this.cache[name]; }
		}


	}


	export default Camera;
