
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint

var roof, bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5;


function preload(){
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Top (650, 30, 1300, 30);
	bob1= new Bob(400, 430)
	bob2= new Bob(500, 430 )
	bob3= new Bob(600, 430 )
	bob4= new Bob(700, 430)
	bob5= new Bob(800, 430)
    rope1 = new Rope(this.roof, this.bob1)


	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background("blue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();  
  roof.display();
  rope1.display();
 
}



