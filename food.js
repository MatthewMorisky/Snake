function Food() {

	
	this.pickLocation = function() {
	var cols = floor((width-1)/scl);
	var rows = floor((height-1)/scl);
	this.x = floor(random(cols)) * scl;
	this.y = floor(random(rows)) * scl;
	if(dist(this.x,this.y, snake.x, snake.y) < 1) {
		this.pickLocation(); //invalid location
	}

	for (var i = 0; i < snake.tail.length; i++) {
			var pos = snake.tail[i];
			var d = dist(this.x,this.y, pos.x, pos.y);
			if (d < 1) {
				this.pickLocation(); //invalid location
			}
		}
	}
	this.show = function() {
		fill( 135, 82, 13);
		rect(this.x, this.y, scl, scl);
	}
}