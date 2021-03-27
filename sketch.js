
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	bob1 = new bob(340,480,39.6);
	bob2 = new bob(420,480,39.6);
	bob3 = new bob(500,480,39.6);
	bob4 = new bob(580,480,39.6);
	bob5 = new bob(660,480,39.6);
	roof1 = new roof(500,100,400,20);
	rope1 = new chain(bob1.body,roof1.body,-79.2*2,0)
	rope2 = new chain(bob2.body,roof1.body,-79.2*1,0)
	rope3 = new chain(bob3.body,roof1.body,79.2*0,0)
	rope4 = new chain(bob4.body,roof1.body,79.2*1,0)
	rope5 = new chain(bob5.body,roof1.body,79.2*2,0)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("pink");

  

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof1.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}
