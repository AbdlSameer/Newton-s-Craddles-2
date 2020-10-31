
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var mConstraint;

function preload()
{
	
}

function setup() {
	canvas=createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world, mConstraint);

	//Creating the Bodies .
	bob1 = new Bob(500,500,"purple");
	bob2 = new Bob(550,500,"lime");
	bob3 = new Bob(600,500,"indigo");
	bob4 = new Bob(650,500,"yellow");
	bob5 = new Bob(700,500,"red");
	rope1 = new Rope(bob1.body,{x:500,y:450});
	rope2 = new Rope(bob2.body,{x:550,y:450});
	rope3 = new Rope(bob3.body,{x:600,y:450});
	rope4 = new Rope(bob4.body,{x:650,y:450});
	rope5 = new Rope(bob5.body,{x:700,y:450});

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

 
}

function mouseDragged() 
{
  Matter.Body.setPosition( bob1.body,{ x: mouseX, y: mouseY});
}













