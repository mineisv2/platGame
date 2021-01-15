console.log("platforms.js");

function drawPlat(){
	for(var plat = 0; plat < plats.length; plat++){
		var curPlat = plats[plat];

		ctx.moveTo(curPlat[1], curPlat[0]);
		ctx.lineTo(curPlat[2], curPlat[0]);
		ctx.stroke();
	}
}