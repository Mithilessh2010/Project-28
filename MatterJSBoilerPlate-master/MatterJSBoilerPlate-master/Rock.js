class stone {
    constructor(x,y,r){
        
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.5,
            isStatic:false
        }
    
        this.x=x;
        this.y=y;
        this.r=r;
       
        this.body=Bodies.circle(this.x,this.y,this.r,options);          
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){         
        push();        
        imageMode(CENTER);  
        console.log("Rock X: "+this.x+ "Y: " + this.y + " Body :" + this.body.position.x + ","+this.body.position.y);
        translate(this.body.position.x, this.body.position.y); 
        //image(this.image, this.x,this.y, this.r,this.r);  
        image(this.image, 0,0,this.r,this.r);  
        pop();        
         
      }
}