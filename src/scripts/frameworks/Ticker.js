	/**
	*
	*	TICKER|JS
	*	---------------
	*	DESC | Util for manager animation frames
	*	LOCATION | > scripts > utils > ticker.js
	*
	*/






	
	/*----------  DEPENDENCIES  ----------*/



	// Vendors
	
	import $ from 'jquery';
	import _ from 'lodash';







	/*----------  CLASS  ----------*/




	// Ticker
	


	class Ticker {



		// Singleton
		
		static instance;


		/**
		 * Constructor
		 * @return {Ticker} the ticker instance
		 */

		
		constructor ()
		{

			// Singleton
			if(Ticker.instance) return Ticker.instance
			else Ticker.instance = this

			// Ticks
			this.ticks = [];
			this.ticksLength = 0;

			// Frame
			this.frame = null;

			// State
			this.is = { framing: false, };

			// Return
			return this;

		}


		/**
		 * Frame event function
		 * @return {Ticker} the ticker instance
		 */	
		
		framer ()
		{
			
			// Functions
			_.forIn(this.ticks, (tick) => 
			{
				if(tick.pause){ return false; }
				tick.func();
			});

			// Frame
			this.frame = window.requestAnimationFrame(() => this.framer());

		}


		/**
		 * Tick a new function
		 * @param {String} name the function name
		 * @param {Function} func the function to execute at each frame
		 * @param {Int} duration the optional duration of the tick
		 * @return {Ticker} the ticker instance
		 */
		
		tick (name, func, duration = null)
		{
			
			// Register
			if(!this.ticks[name]){ this.ticksLength++; }
			this.ticks[name] = { name: name, func: func, duration: duration, pause: false, };

			// Framer
			if(!this.is.framing)
			{
				this.frame = window.requestAnimationFrame(() => this.framer());
				this.is.framing = true;
			}

			// Return
			return this;

		}

		
		/**
		 * Remove a function
		 * @param {String} name the name of the function to remove
		 * @return {Ticker} the ticker instance
		 */
		
		remove (name)
		{

			// Unregister
			if(this.ticks[name]){ delete this.ticks[name]; this.ticksLength--; }

			// Framer
			if(this.ticksLength < 1)
			{
				window.cancelAnimationFrame(this.frame);
				this.is.framing = false;
			}

			// Return
			return this;

		}

		
		/**
		 * Pause a function
		 * @param {String} name the name of the function to pause
		 * @return {Ticker} the ticker instance
		 */
		
		pause (name)
		{

			// State
			if(!this.ticks[name]){ return this; }

			// State
			this.ticks[name].pause = true;

			// Return
			return this;

		}


		/**
		 * Play a function
		 * @param {String} name the name of the function to play
		 * @return {Ticker} the ticker instance
		 */
		
		play (name)
		{

			// State
			if(!this.ticks[name]){ return this; }

			// State
			this.ticks[name].pause = false;

			// Return
			return this;

		}


		hasTick (name)
		{

			// Return
			if(!this.ticks[name]){ return false; }
			else{ return true; }

		}

	}





	export default Ticker




