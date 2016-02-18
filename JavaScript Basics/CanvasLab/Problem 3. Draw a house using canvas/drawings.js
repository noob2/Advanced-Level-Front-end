var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle =' #764600';
ctx.lineWidth=3;

function drawWindow(x,y){
    ctx.fillStyle =' #000000';
    ctx.beginPath();
    ctx.rect(x,y,25,30);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(x+35,y,25,30);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(x,y+40,25,30);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(x+35,y+40,25,30);
    ctx.fill();
    ctx.stroke();
}

//rooftop
ctx.beginPath();
ctx.moveTo(330,100);
ctx.lineTo(500,280);
ctx.lineTo(200,280);
ctx.closePath();
ctx.fill();
ctx.stroke();

//kumin
ctx.beginPath();
ctx.ellipse(440, 140, 20, 10, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.arc(410,75,180,0.42*Math.PI,0.48*Math.PI);
ctx.lineTo(420,140);
ctx.fill();
ctx.stroke();

//house square
ctx.beginPath();
ctx.rect(200,280,300,270);
ctx.fill();
ctx.stroke();

//window
drawWindow(220,300);
drawWindow(380,300);
drawWindow(380,450);

//door
ctx.beginPath();
ctx.moveTo(230,550);
ctx.arc(270,450,40,1*Math.PI,2*Math.PI);
ctx.lineTo(310,550);
ctx.lineTo(270,550);
ctx.lineTo(270,410);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(250, 500, 5, 5, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(285, 500, 5, 5, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();