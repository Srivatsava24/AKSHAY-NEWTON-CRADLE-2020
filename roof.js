// Creating Class Roof
class Roof{
    constructor(){
        var option = {
          'isStatic':true
        }
       this.body = Bodies.rectangle(width/2, height/4, 300, 15, option);
       World.add(world, this.body);
    }
   display(){
       rectMode(CENTER);
       fill("Orange");
       rect(this.body.position.x, this.body.position.y, 550, 45);
   }
}
