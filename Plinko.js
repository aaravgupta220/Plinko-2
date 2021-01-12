class Plinko{

    constructor(x, y){

        var options = {
            'isStatic' : true
        }

        this.x = x;
        this.y = y;
        this.radius = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("cyan");
        ellipse(0, 0, 10);
        
    }

}