var c;
var ctx;
var score1;
var score2;

var WIDTH = 800;
var HEIGHT = 600;

var ball = new Ball(268, 262, 2, 4, 20);
var paddle = new Paddle(20, 550, 300, 20, 10, 0);
var paddle2 = new Paddle(20, 50, 300, 20, 10, 0);

var input = new Input();
attachListeners(input);
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

    ball.DrawShape();
    paddle.DrawShape();
    paddle2.DrawShape();

    ball.CheckForCollision();
    ball.Ubdate();

    paddle.CheckForCollision();
    paddle.Ubdate();
    if (input.right) {
        paddle.x += paddle.velocity;
    } else if (input.left) {
        paddle.x -= paddle.velocity;
    }

    paddle2.CheckForCollision();
    paddle2.Ubdate();
    if (input.d) {
        paddle2.x += paddle2.velocity;
    } else if (input.a) {
        paddle2.x -= paddle2.velocity;
    }

    if (ball.boundingBox.intersects(paddle.boundingBox)) {
        ball.y = paddle.y + ball.radius + paddle.height;
        ball.velocityY = -ball.velocityY;
    }

    if (ball.boundingBox.intersects(paddle2.boundingBox)) {
        ball.y = paddle2.y + ball.radius + paddle2.height;
        ball.velocityY = -ball.velocityY;
    }


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