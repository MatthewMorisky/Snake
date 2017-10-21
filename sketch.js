
var scl = 20; //Global Variable that controls food size, snake size and map size

function setup() {
	var cols = 25 //Number of columns on the grid
	var rows = 25 //Number of rows on the grid
	createCanvas(scl*cols+1,scl*rows+1); //Takes all elements and creates the grid, the +1 makes the game look better when the snake is along walls
	snake = new Snake();
	frameRate(10); //Gives the game an arcade feel
	food = new Food();
	food.pickLocation();
}

function draw() {
	background(51);
	snake.death();
	snake.actionHold(); //Calling this action every frame limits the user to one action per frame preventing unintended death by pressing keys before the next frame appears
	snake.update();
	snake.show();
	food.show();

	if (snake.eat(food)) {
		food.pickLocation();
	}
}
function keyPressed() {
if (!snake.isPaused) { //Conditional that prevents adding actions to the queue while the game is paused
	if (keyCode === UP_ARROW) {
		snake.queue.push(0); //New snake.xspeed
		snake.queue.push(-1); //New snake.yspeed
	}
	else if (keyCode === DOWN_ARROW) {
		snake.queue.push(0);
		snake.queue.push(1);
	}
	else if (keyCode === LEFT_ARROW) {
		snake.queue.push(-1);
		snake.queue.push(0);
	}
	else if (keyCode === RIGHT_ARROW) {
		snake.queue.push(1);
		snake.queue.push(0);
	}
}
	if (keyCode === 32) { //Spacebar
		snake.pause();
	}

}
