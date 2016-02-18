var c;
var ctx;
var score1;
var score2;

var WIDTH = 800;
var HEIGHT = 600;

var planet = new Planet(1, 2,3, 4, 20);
function init() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    score1 = c.getContext("2d");
    score1.font = "bold 18px Arial";
    score2 = c.getContext("2d");
    score2.font = "bold 18px Arial";

    return setInterval(draw, 10);
}

function draw() {
    clear();
    planet.DrawShape();
    planet.Ubdate();


    if (ball.y > HEIGHT) {
        paddle.points++;
        ball.x = 268;
        ball.y = 266;
    } else if (ball.y < 0) {
        paddle2.points++;
        ball.x = 268;
        ball.y = 266;
    }
    score1.fillText(paddle.points, 780, 20);
    score2.fillText(paddle2.points, 780, 590);
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

init();