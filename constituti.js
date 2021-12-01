class constituti {
    constructor(Bodies1,Bodies2){
     
     var options = {Bodies1:Bodies1,
    Bodies2:Bodies2, 
     stiffness: 0.04,
    length:10
    
    }
   this.cons = Constraint.create(options)

   World.add(world,this.cons)

    }



}