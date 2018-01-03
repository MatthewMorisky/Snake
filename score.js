function Score() {
	this.highscore = 0;
	
	this.show = function() {
		push();
		fill(255);
		textSize(20);
		if (this.highscore < snake.total) {
			this.highscore = snake.total;
		}
		rect(-1,-1,width + 1,21);
		fill(0);
		text('Highscore: ' + this.highscore, 14, 16)
		textAlign(RIGHT);
		text('Length: ' + snake.total, width -14, 16);
		
		pop();
	}
}