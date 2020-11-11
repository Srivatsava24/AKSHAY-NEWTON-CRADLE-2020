//Creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Creating variables
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

//Creating function setup
function setup() {
  createCanvas(1500,650);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof();

  bobDiameter = 80;
  var posx = width/2;
  var posy = height/2 + 150;

  bob1 = new Bob(posx-bobDiameter*2, posy, bobDiameter);
	bob2 = new Bob(posx-bobDiameter, posy, bobDiameter);
	bob3 = new Bob(posx, posy, bobDiameter);
	bob4 = new Bob(posx+bobDiameter, posy, bobDiameter);
	bob5 = new Bob(posx+bobDiameter*2, posy, bobDiameter);

  rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
  rope2 = new Rope(bob2.body, roof.body, -bobDiameter*1, 0);
  rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter*1, 0);
  rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);

  

  Engine.run(engine);
}
	//Creating function keyPressed
	function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-120,y:120});   
	 }
   }

   //Creating function mouseDragged
   function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
	} 

//Creating function draw
function draw() {
  background("Teal");
  Engine.update(engine);

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  fill(124,252,0);
  textSize(40);
  textStyle(BOLD);
  stroke(124,252,0);
  textFont("Arial");
  text("AKSHAY'S NEWTON'S CRADLE 2020",350,80);

  fill("SeaShell");
  textSize(20);
  textStyle(NORMAL);
  stroke("SeaShell");
  textFont("Arial");
  text("PRESS UP-ARROW KEY TO RELEASE THE BOB",500,550)

  fill("SeaShell");
  textSize(20);
  textStyle(NORMAL);
  stroke("SeaShell");
  textFont("Arial");
  text("OR DRAG THE BOB USING MOUSE TO RELEASE IT",480,580)

  drawSprites();
}