class piso {
  constructor(x,y,width,height) {
    
    var config_piso = {
     isStatic : true
    }
    
    this.objeto = Bodies.rectangle(x,y,width,height,config_piso)
    this.width = width;
    this.height = height;
    World.add(world,this.objeto)
  }

  display() {
    var pos = this.objeto.position;
    fill("brown")
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
  }
}