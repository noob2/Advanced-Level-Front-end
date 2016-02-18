var Planet = (function () {
    function Planet(x1,y1,x2,y2,mass) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.mass = mass;
    }
    Planet.prototype.Ubdate = function(){
        this.x1 += this.x1 - this.x2;
        this.y1 += this.y1 - this.y2;
    };

    Planet.prototype.DrawShape = function(){
        ctx.beginPath();
        ctx.arc(this.x1, this.y1, this.mass, 0, Math.PI * 2, true);
        ctx.fill();
    };
    return Planet;
}());
