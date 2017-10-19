function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	

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
	this.dir = function(x, y) {
		if (!((this.xspeed + x == 0) && (this.yspeed + y == 0))) {
		this.xspeed = x;
		this.yspeed = y;
		} //current bug if an arrow key is pressed before the snake moves dir will change twice and snake can eat it's tail
	}
	this.pause = function() {
		this.dir(0, 0);
	}
	this.death = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x,this.y, pos.x, pos.y);
			if (d < 1) {
				console.log('Game over, Final Score: ' + this.total);
				this.total = 0;
				this.tail = [];
			}

		}
	}
	this.update = function() {
		if(this.total === this.tail.length) {
			for (var i = 0; i < this.tail.length-1; i++) {
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x, 0, (width-1)-scl);
		this.y = constrain(this.y, 0, (height-1)-scl);
	}

	this.show = function() {
		fill(255);
		for(var i = 0; i < this.total; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}

		rect(this.x, this.y, scl, scl);
	}
}