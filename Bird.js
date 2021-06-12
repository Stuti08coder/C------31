class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  this.smokeimg = loadImage("sprites/smoke.png")
this. smoke = []  

}

  display() {

super.display();
if(this.body.position.x>200  &&  this.body.velocity.x> 5){
 
var position = [this.body.position.x,bird.body.position.y]

    this.smoke.push(position)
}


for(var i = 0; i<this.smoke.length;i++){
  image(this.smokeimg,this.smoke[i][0], this.smoke[i][1])

}


  }
}
