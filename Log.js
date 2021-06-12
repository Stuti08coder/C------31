class Log {
  constructor(x,y,height,angle){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
    this.body=Bodies.rectangle(x,y,20,height,angle, options);
    this.width = 20;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);

      
      
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
  
