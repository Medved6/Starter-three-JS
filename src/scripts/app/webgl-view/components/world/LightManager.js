		

	/**
	*
	*	LIGHT-MANAGER|JS
	* 	-------------------
	*	DESC | Define a manager for all lights
	*	LOCATION | app > interface > components > world > LightManager.js
	*
	*/

	
	/*--------- IMPORTS ----------*/

	import _ from 'lodash'
	import Config from '@configs/WorldConfig'

	const THREE = require('three')

	/*---------- CLASS -----------*/

	


	class LightManger {

		constructor() {

			this.config = Config.get('lights');
			this.treeGroup = new THREE.Group();

			this.create();
			
			return this

		}



		create() {

			_.map(this.config, (item, index) => {

				if(!item.type || typeof item.type != 'string') return

				const light = new THREE[item.type]()
				light.name = item.name
				light.position.set(item.position.x,item.position.y,item.position.z)

				_.map(item.params, (params,index) => {
					switch(params.type) {
						case 'color' :
							light[params.name].setHex(params.value)
							break
						case 'setting' :
							light[params.name] = params.value
							break
					}
				});

				this.treeGroup.add(light);
			})

		}




	}


	export default LightManger;