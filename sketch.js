const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,object_options,ball,ball_options;

function setup() {
  var canvas= createCanvas(400,400);
  engine = Engine.create(); //creates Physics Engine
  world = engine.world;

  object_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,350,100,100,object_options);
  World.add(world,ground);

  ball_options = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,100,100);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}