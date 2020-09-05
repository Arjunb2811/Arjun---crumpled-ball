const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var paper1,box1,box2,slingshot1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new Paper(200,200)
box1 = new Box(300,650,100,100)
slingshot1 = new SlingShot(paper1.body,{x:50, y:50})
//box2 = new Box(400,650,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,255);
  paper1.display();
  box1.display();
  slingshot1.display();
  //box2.display();
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(paper1.body,{x:mouseX,y:mousey})


}

function mouseReleased(){
slingshot1.fly();


}



