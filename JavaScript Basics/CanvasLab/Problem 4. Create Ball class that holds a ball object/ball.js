var Ball = (function () {
    function Ball(x, y, velocity, angle, radius) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.angle = angle;
        this.radius = radius;
        this.boundingBox = new Rectangle(x - radius, y + radius, radius*2, radius*2);
    }

    Ball.prototype.CheckForCollision = function(){
        if (this.x + this.velocityX > WIDTH - this.radius || this.x + this.velocityX < 0 + this.radius) {
            this.velocity *= -1;
        }
    };

    Ball.prototype.Ubdate = function(){
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.boundingBox.x = this.x-this.radius;
        this.boundingBox.y = this.y-this.radius;
    };

    Ball.prototype.DrawShape = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();
    };

    return Ball;
}());

