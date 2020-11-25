class Bob {

    constructor(x, y) {

        var options = {
             isStatic:true,
            'restitution':0.09,
            'friction':0.00005,
            'density':1.2
        }
        this.body =  Bodies.circle(x, y, 90, options);
       this.radius = 90;
    
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS)
        fill("pink");
        strokeWeight(4)
        stroke("pink")
        ellipse( 0, 0, 90, 90);
        pop();
      }
    }