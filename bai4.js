let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render(canvas) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

let newCircle = new Circle(10, 10, 100, "#000000");
newCircle.render(canvas);