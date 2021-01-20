console.log("movement.js");
var speed = 10;
var gravityS = 0;
var gravityA = 0.7;
var jumpH = 20;

var onGround = false;

var frames = 0;

var platH = 0;
var platV = false;
var inlinePlat = false;

left = false;
right = false;

function move(){
	if(left){
		if(player1.x >= 450){
			diff -= speed;
		}else{
			player1.x += speed;
		}
	}	
	if(right){
		if(player1.x <= 10){
			diff += speed;
		}else{
			player1.x -= speed;
		}
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
		if(frames < 7){
			//console.log("jumping");
			player1.y -= jumpH;
			frames++;
		}else{
			//console.log("reset");
			frames = 0;
			clearInterval(jumping);
		}
	}, gameSpeed);
}

function gravity(){
	if(player1.y + gravityS < platH-40){
		if(player1.y+40 > platH){
			player1.y = platH-40;
		}else{
			player1.y += gravityS;
			gravityS += gravityA;
		}
	}else{
		gravityS = 0;
		onGround = true; 
	}
}

function drawPlat(){
	for(var plat = 0; plat < plats.length; plat++){
		var curPlat = plats[plat];
		ctx.beginPath();
		ctx.rect(curPlat[1]+diff, curPlat[0], (curPlat[2]+diff)-(curPlat[1]+diff), 2);
		//ctx.moveTo(curPlat[1]+diff, curPlat[0]);
		//ctx.lineTo(curPlat[2]+diff, curPlat[0]);
		ctx.stroke();
	}
}

function findPlat(){
	//console.log(inlinePlat);
	for(var i = 0; i < plats.length; i++){
		curPlat = plats[i];
		if(player1.x >= curPlat[1]+diff && player1.x+40 <= curPlat[2]+diff){
			inlinePlat = true;
			platH = curPlat[0];
			//console.log(platV);
			if(player1.y > platH-40){
				platH = height;
			}
			break;
		}else{
			inlinePlat = false;
			platH = height;
		}
	}
}
