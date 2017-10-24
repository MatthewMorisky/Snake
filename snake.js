function Snake() {
	this.x = 0; //snake head x position
	this.y = 0; //snake Head y position
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0; //Number of food snake has eaten
	this.tail = []; //Array of vectors holding current tail positions
	this.queue = []; //Array holding list of user inputs in format [x, y, x2, y2 ...]
	this.isPaused = false;

	/**
	 * This method checks food is at the location of the head
	 * 
	 * @param pos
	 * 		  A vector to be compaired with the head
	 *
	 * @return TRUE if the head is at the location pos
	 *		   FALSE otherwise
	 */
	this.eat = function(pos) {

		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) {
			this.total++;
			return true;
		}
		else {
			return false;
		}
	}
	/**
	 * This method checks if any user actions are in the queue
	 * if so, the first two are sent to the dir function
	 */
	this.actionHold = function() {
	
		if (this.queue.length > 0) {
			var newXSpeed = this.queue.shift();
			var newYSpeed = this.queue.shift();
			this.dir(newXSpeed, newYSpeed);
		}
	} 

	/**
	 * This method takes an x and y speed from the queue
	 * and changes the snakes current direction accourdingly
	 */
	this.dir = function(x, y) {

		//Error handling so that a player can't 
		//go backwards over their tail
		if (!(this.xspeed + x == 0)) { 
			this.xspeed = x;
			this.yspeed = y;
		}
	}

	/**
	 * This method checks if the game is currently paused 
	 * and switches the state to whichever it isn't
	 */
	this.pause = function() {
		if (this.isPaused) {
			frameRate(10);
			this.isPaused = false;
		}
		else {
			frameRate(0);
			this.isPaused = true;
		}
	}
	/**
	 * This method checks if any pieces of the tail 
	 * are where the head is and if so resets the game
	 */
	this.death = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x,this.y, pos.x, pos.y);
			if (d < 1) {
				console.log('Game over, Final Score: ' + this.total); //ToDo make the end screen not just a console log
				this.total = 0;
				this.tail = [];
			}

		}
	}
	/**
	 * This method moves all the snake pieces where they should be
	 * and adds new pieces in when necessary
	 */
	this.update = function() {
		//opens up a slot for the new block if tail has increased
		if (this.total === this.tail.length) {
			//Moves every object in the tail down one except for the
			//last one each cycle tail[0] is the furthest from the head
			for (var i = 0; i < this.tail.length-1; i++) {
				this.tail[i] = this.tail[i+1];
			}
		}
		//Places the block immediatly behind the head
		this.tail[this.total-1] = createVector(this.x, this.y);

		//Moves the head
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		//prevents the head from going off screen
		this.x = constrain(this.x, 0, (width-1)-scl);
		this.y = constrain(this.y, 0, (height-1)-scl);
	}
	/**
	 * This method colors all of the snake body and the head 
	 * and creates squares of size scale at each position in the tail
	 * and head
	 */
	this.show = function() {
		
		for(var i = 0; i < this.total; i++) {
			fill(35, random(150, 255), 68); //Color for the snake body, random makes he snake look shiny
			rect(this.tail[i].x, this.tail[i].y, scl, scl);

		}
		fill(255);
		rect(this.x, this.y, scl, scl);

	}
}