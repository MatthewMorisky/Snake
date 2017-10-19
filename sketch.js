var snake;
var scl = 20;

function setup() {
	createCanvas(501,501);
	snake = new Snake();
	frameRate(10);
	food = new Food();
	food.pickLocation();
}

function draw() {
	background(51);
	//snake.death();
	snake.update();
	snake.show();
	food.show();

	if (snake.eat(food)) {
		food.pickLocation();
	}
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.dir(0, -1);
	}
	else if (keyCode === DOWN_ARROW) {
		snake.dir(0, 1);
	}
	else if (keyCode === LEFT_ARROW) {
		snake.dir(-1, 0);
	}
	else if (keyCode === RIGHT_ARROW) {
		snake.dir(1, 0);
	}
	else if (keyCode === 32) {//Spacebar
		snake.pause(); 
	}
}
