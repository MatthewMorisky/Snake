function Score() {
	this.highscore = 0;
	
	this.show = function() {
		push();
		fill(255);
		textSize(20);
		if (this.highscore < snake.total) {
			this.highscore = snake.total;
		}
		text('Highscore: ' + this.highscore, 14, 20)
		textAlign(RIGHT);
		text('Length: ' + snake.total, width -14, 20);
		
		pop();
	}
}