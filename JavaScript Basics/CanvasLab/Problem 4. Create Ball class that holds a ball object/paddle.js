var Paddle = (function(){
    function Paddle(x,y,width,height,velocity,points){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.points = points;
        this.boundingBox = new Rectangle(x,y,width,height);
    }

    Paddle.prototype.CheckForCollision = function(){
        if (this.x + this.width > WIDTH) {
            this.x = WIDTH-this.width;
        }
        if(this.x < 0){
            this.x = 0;
        }
    };

    Paddle.prototype.Ubdate = function(){
        this.boundingBox.x = this.x;
    };

    Paddle.prototype.DrawShape = function(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    };

    return Paddle;
}());
