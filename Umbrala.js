class Umbrala{
    
    constructor(x,y,radius,color) {
        

        this.body = Bodies.circle(x,y,radius);
        this.radius= radius;
        this.color = color;
        this.image = loadImage("walking_1.png");
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        
        
        ellipse(0,0,this.radius,this.radius);
        
        pop()
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,  2*this.radius,2*this.radius);
        
    }
}