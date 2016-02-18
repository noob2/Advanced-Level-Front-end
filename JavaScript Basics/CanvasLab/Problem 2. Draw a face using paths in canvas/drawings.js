var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//head
ctx.fillStyle =' #33cccc';
ctx.strokeStyle='#3366cc';
ctx.lineWidth=3;
ctx.beginPath();
ctx.ellipse(200, 300, 60, 75, 45 * Math.PI/180, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//bottom-hat-sphere
ctx.fillStyle =' #3399ff';
ctx.beginPath();
ctx.ellipse(190, 250, 100, 20, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//cyllinder
ctx.beginPath();
ctx.ellipse(210, 140, 50, 10, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.arc(210,75,180,0.42*Math.PI,0.6*Math.PI);
ctx.lineTo(160,140);
ctx.fill();
ctx.stroke();

//face

//nose
ctx.beginPath();
ctx.moveTo(200,300);
ctx.lineTo(180,320);
ctx.lineTo(195,320);
ctx.stroke();

//mouth
ctx.beginPath();
ctx.ellipse(200, 340, 30, 10, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();

//eye 1
ctx.beginPath();
ctx.ellipse(170, 290, 10, 10, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();

//eye 2
ctx.beginPath();
ctx.ellipse(220, 290, 10, 10, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();

//eye 1 iris
ctx.beginPath();
ctx.ellipse(170, 290, 5, 2, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//eye 2 iris
ctx.beginPath();
ctx.ellipse(220, 290, 2, 5, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
