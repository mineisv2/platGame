var speed = 10;
var gravityS = 0;
var gravityA = 0.5;
var jumpH = 40;

var onGround = false;

var frames = 0;

left = false;
right = false;

function move(){
	if(left){
		player1.x += speed;
	}	
	if(right){
		player1.x -= speed;
	}
}

function down(e){
	//console.log(e.keyCode);
	if(e.keyCode == 38){
		if(onGround){
			onGround = false;
			jump();
		}
	}
	if(e.keyCode == 39){
		left = true;
	}
	if(e.keyCode == 37){
		right = true;
	}
	e.preventDefault();
}

function up(e){
	if(e.keyCode == 39){
		left = false;
	}
	if(e.keyCode == 37){
		right = false;
	}
	e.preventDefault();
}

function jump(jumping){
	var jumping = setInterval(function(){
	if(frames < 4){
		console.log("jumping");
		player1.y -= jumpH;
		frames++;
	}else{
		console.log("reset");
		frames = 0;
		clearInterval(jumping);
	}
	}, gameSpeed);
}

function gravity(){
	if(player1.y < height-40){
		player1.y += gravityS;
		gravityS += gravityA;
	}else if(player1.y > height-40){
		player1.y = height-40;
	}else{
		gravityS = 0;
		onGround = true;
	}
}

