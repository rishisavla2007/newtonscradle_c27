class Bob {
    constructor(x, y,r) {
        var options = {
            isStatic:true,
          friction:0.4,
          density:3,
          restitution:1.2,
          
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);
    }

    display(){
        var bobPos=this.body.position;
        push();
        translate(bobPos.x, bobPos.y);
        rotate  (this.body.angle)
        fill('white')
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.r/2,this.r/2);
        pop();
    }
};  