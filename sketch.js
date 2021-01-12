const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {

  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240, 790, 480, 20);

  for(var j = 0; j<= width; j = j + 80){
    divisions.push(new Division(j, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var m = 0; m <= width; m = m + 50){
    plinkos.push(new Plinko(j, 75));
  }

}

function draw() {

  background("black"); 

  ground1.display();

  for(var j = 0; j <= divisions.length; j++){
    divisions[j].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  
  for(var a = 0; a < particles.length; a++){
    particles[a].display();
  }

  for(var m = 0; m < plinkos.length; plinkos++){
    plinkos[m].display();
  }

  drawSprites();

}