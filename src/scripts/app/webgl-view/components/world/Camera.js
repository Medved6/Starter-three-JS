		

	/**
	*
	*	CAMERA|JS
	* 	-------------------
	*	DESC | Define class : camera
	*	LOCATION | src > scripts > components > world
	*
	*/


	const THREE = require('three');


	/*--------- CLASS ----------*/

		

	class Camera {



		constructor(name,opt) {


			this.params = opt;
			this.name = name;


			this.create();

			return this.instance;
		}




		create() {

			this.instance = new THREE[this.params.build.type](
				this.params.build.fov,
				this.params.build.ratio,
				this.params.build.near,
				this.params.build.far
			);

			this.instance.name = this.name;
			this.instance.position.set(this.params.position.x,this.params.position.y,this.params.position.z)
			this.instance.lookAt(this.params.target)


		}


	}


	export default Camera;
