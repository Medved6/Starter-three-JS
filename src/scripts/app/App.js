		

	/**
	*
	*	APP|JS
	* 	-------------------
	*	DESC | Define main entry
	*	LOCATION | app > App.js
	*
	*/



	/*--------- IMPORTS ----------*/

	import $ from 'jquery';
	import WebglView from './webgl-view/core/WebglView';


	/*--------- CLASS ----------*/

	let webglview;

	$(window).ready(()=>{ webglview = new WebglView(); })
