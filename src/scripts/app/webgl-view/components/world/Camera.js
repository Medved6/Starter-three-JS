		

	/**
	*
	*	CAMERA|JS
	* 	-------------------
	*	DESC | Define class : camera
	*	LOCATION | src > scripts > components > world
	*
	*/

	import Config from '@configs/WorldConfig'

	const THREE = require('three');


	/*--------- CLASS ----------*/

		

	class Camera {

		static instance;

		constructor(name) {


			this.config = Config.get('camera');
			this.name = name;

			this.create();

			return this.instance;
		}






		create() {

			this.instance = new THREE[this.config.build.type](
				this.config.build.fov,
				this.config.build.ratio,
				this.config.build.near,
				this.config.build.far
			);

			this.instance.name = this.name;
			this.instance.position.set(this.config.position.x,this.config.position.y,this.config.position.z)
			this.instance.lookAt(this.config.target)


		}


	}


	export default Camera;
