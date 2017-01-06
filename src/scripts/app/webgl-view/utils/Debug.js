
var Debug;


(function(){

	'use strict';


	var instance;

	Debug = function() {


		if(instance){
			return instance;
		}
		
		this.init();

	}


	Debug.prototype.init = function() {
		

		this.initGui();
		this.initStats();


		instance = this;

	};


	Debug.prototype.initStats = function() {
		

		this.stats = new Stats();
		this.stats.domElement.style.position = 'absolute';
		this.stats.domElement.style.top = '0px';
		document.getElementsByTagName('body')[0].appendChild( this.stats.domElement );

	};



	Debug.prototype.initGui = function() {
		

		this.gui                = {};
    this.gui.instance       = new dat.GUI();
    this.gui.instance.width = 300;
   
	};




})();