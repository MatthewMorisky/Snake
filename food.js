function Food() {

	
	this.pickLocation = function() {
	var cols = floor((width-1)/scl);
	var rows = floor((height-1)/scl);
	this.x = floor(random(cols)) * scl;
	this.y = floor(random(rows)) * scl;
	}
	this.show = function() {
		fill( 135, 82, 13);
		rect(this.x, this.y, scl, scl);
	}
}