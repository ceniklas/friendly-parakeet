window.onload = function () {
    /*
     var canvas = document.getElementById("canvas");
     var ctx = canvas.getContext("2d");
     var width = canvas.width = window.innerWidth;
     var height = canvas.height = window.innerHeight;

     var ledCount = 8;
     var cellHeight = height/(ledCount + 2);
     var circleRadius = cellHeight/4;
     var leds = new Array();

     ctx.lineWidth="4";
     ctx.rect(width/4, cellHeight, width/2, height-cellHeight*2);
     ctx.stroke();


     ctx.lineWidth="1";
     for(var i=0; i<ledCount; i++)
     {
     ctx.beginPath();
     ctx.rect(width/4, cellHeight*(i+1), width/2, cellHeight);
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     leds.push(ctx.arc(width/4-circleRadius*1.5, cellHeight*(i+1) + cellHeight/2, circleRadius, 0, 2*Math.PI));
     ctx.stroke();
     ctx.closePath();
     }

     for(var i=0; i<ledCount; i++)
     {
     leds.color
     }
     */


    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var handle =
    {
        x: width / 2,
        y: height / 2,
        radius: 20
    };
    var offset = {};

    var ledCount = 8;
    var cellHeight = height/(ledCount + 2);
    var circleRadius = cellHeight/4;
    var ledColors = new Array();

    //Math.randomInt(0,255);
    for(var i=0; i<ledCount; i++){
        ledColors.push(getRandomColor());
    }

    draw();

    function draw() {
        ctx.clearRect(0, 0, width, height);


        ctx.lineWidth="4";
        ctx.rect(width/4, cellHeight, width/2, height-cellHeight*2);
        ctx.stroke();


        ctx.lineWidth="1";
        for(var i=0; i<ledCount; i++)
        {
            ctx.beginPath();
            ctx.rect(width/4, cellHeight*(i+1), width/2, cellHeight);
            ctx.fillStyle = ledColors[i];
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(width/4-circleRadius*1.5, cellHeight*(i+1) + cellHeight/2, circleRadius, 0, 2*Math.PI);
            ctx.fillStyle = ledColors[i];
            ctx.fill();
            ctx.closePath();
        }
        /*ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false);
        ctx.fill();*/
    }

    document.body.addEventListener("mousedown", function (event) {
        if (utils.circlePointCollision(event.clientX, event.clientY, handle)) {
            document.body.addEventListener("mousemove", onMouseMove);
            document.body.addEventListener("mouseup", onMouseUp);
            offset.x = event.clientX - handle.x;
            offset.y = event.clientY - handle.y;
        }

        var rect =
        {
            //ctx.rect(width/4, cellHeight, width/2, height-cellHeight*2);
            x: width / 4,
            y: cellHeight,
            width: width/2,
            height: height-cellHeight*2
        };

        if(utils.pointInRect(event.clientX, event.clientY, rect))
        {
            console.log("Hi");
        }
    });

    function onMouseMove(event) {
        handle.x = event.clientX;// - offset.x;
        handle.y = event.clientY;// - offset.y;
        draw();
    }

    function onMouseUp(event) {
        document.body.removeEventListener("mousemove", onMouseMove);
        document.body.removeEventListener("mouseup", onMouseUp);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

};