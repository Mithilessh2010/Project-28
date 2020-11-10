class mango {
    constructor(x,y,r){
        
        var options = {
            isStatic: true,
            restitution: 0,
            friction :1        }
    
        this.x=x;
        this.y=y;
        this.r=r;
       
        this.body=Bodies.circle(this.x,this.y,this.r,options);          
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);        
        image(this.image, this.x,this.y, this.r,this.r);  
        pop();
      }
}