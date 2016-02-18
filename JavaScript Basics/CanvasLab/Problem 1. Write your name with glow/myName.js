var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var text = "Viksata";
ctx.font = "100px Arial";
ctx.fillStyle = 'blue';
ctx.fillText(text,100,200);
ctx.strokeStyle='red';
ctx.lineWidth=3;
ctx.strokeText(text,100,200);