var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var width = myCanvas.width = 500;
var height = myCanvas.height = 500;

var speed = 30;
var gravityS = 0;
var gravityA = 0.5;
var jumpH = 40;

var onGround = false;

ctx.beginPath();

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.update = function(){
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function start(){
	player1 = new component(40, 40, "red",  40, 40);
}

function move(e){
	console.log(e.keyCode);
	switch(e.keyCode){
		case 40:
			player1.y += speed;
			break;
		case 38:
			if(onGround){
				for(var i = 0; i < 3; i++){
					player1.y -= jumpH;
				}
				onGround = false;
			}
			break;
		case 39:
			player1.x += speed;
			break;
		case 37:
			player1.x -= speed;
			break;
	}
	e.preventDefault();
}

function jump(){
	if(onGround){
		
	}
}

function gravity(){
	if(player1.y < height-40){
		player1.y += gravityS;
		gravityS += gravityA;
	}else{
		gravityS = 0;
		onGround = true;
	}
}

//////PROGRAM\\\\\\
start();
addEventListener("keydown", move);
setInterval(loop, 33);

function loop(){
	gravity();
	ctx.clearRect(0, 0, width, height);
	player1.update();
}