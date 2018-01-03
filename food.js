function Food() {

	/**
	 * This method picks a random food location then checks to see if
	 * that spot is occupied, if it is a new random location is picked
	 */
	this.pickLocation = function() {
	var cols = floor((width-1)/scl);
	var rows = floor((height-1)/scl);
	this.x = floor(random(cols)) * scl;
	this.y = floor(random(1,rows)) * scl;
	
	//Check if food is on tail
	for (var i = 0; i < snake.tail.length; i++) {
			var pos = snake.tail[i];
			var d = dist(this.x,this.y, pos.x, pos.y);
			if (d < 1) {
				this.pickLocation(); //invalid location
				break; //Optimization to prevent redundant looping
			}
		}
	//Check if food is on head
	if (dist(this.x,this.y, snake.x, snake.y) < 1) {
		this.pickLocation(); //invalid location	
		}
	}
	/**
	 * This method draws a food square of size scale
	 */
	this.show = function() {
		fill( 135, 82, 13); //Brown
		rect(this.x, this.y, scl, scl);
	}
}