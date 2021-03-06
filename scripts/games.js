console.log("games.js");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var width = myCanvas.width = 500;
var height = myCanvas.height = 500;

var gameSpeed = 33;

//platform format: [height, left side, right side];
var plats = [[20, 20, 50], [300, 30, 120], [400, 140, 260]];

//box format: [x, y]
var box = [[50, 250]];
var boxSize = 30;

var diff = 300;


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

//elements to add when the game starts
function start(){
	player1 = new component(40, 40, "red",  40, 40);
}

//////PROGRAM\\\\\\
start();

//Gets the key pressed
addEventListener("keyup", up);
addEventListener("keydown", down);

//makes loop for the game
setInterval(loop, gameSpeed);

//gameloop
function loop(){
	gravity();
	move();
	ctx.clearRect(0, 0, width, height);
	player1.update();
	drawPlat();
	findPlat();
}
