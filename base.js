class base {

    constructor(x,y,width,height,angle){
   
     var confing_tronco = {
       restitution : 1,
       friction : 2,
       density : 1
     }
   
     this.geral = Bodies.rectangle(x,y,width,height,confing_tronco)
     this.image = loadImage("base.png");
     this.width = width;
     this.height = height;
     World.add(world,this.geral);
    }
   
     display() {
   
       var pos = this.geral.position;
       var angulo = this.geral.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angulo);
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
       pop();
   
     }
   
   }