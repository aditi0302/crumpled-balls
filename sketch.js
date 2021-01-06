var ball, dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, dustbin1;
var world, engine

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
	paper1 = new paper (100,500,20,20)
    dustbin1=new Dustbin (500,700)


	

	
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
paper1.display();
dustbin1.display();

  drawSprites();
 
}

function keyPressed() 
  { 
	  if (keyCode === UP_ARROW) 
	{ 
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:15,y:-15}); 
	}
  }
