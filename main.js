window.onload = function() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

    var LEDcount = 8;

    ctx.lineWidth="2";
    ctx.rect(width/4, height/4, width/2, height/2);
    ctx.stroke();

    ctx.lineWidth="1";
    for(var i=0; i<LEDcount; i++)
    {
        ctx.rect(width/4, height/LEDcount, width/2, height/LEDcount);
        ctx.stroke();
    }


/*
    // Red rectangle
    ctx.beginPath();
    ctx.lineWidth="6";
    ctx.strokeStyle="red";
    ctx.rect(5,5,290,140);
    ctx.stroke();

// Green rectangle
    ctx.beginPath();
    ctx.lineWidth="4";
    ctx.strokeStyle="green";
    ctx.rect(30,30,50,50);
    ctx.stroke();
*/

};