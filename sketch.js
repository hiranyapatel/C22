//World, Engine, Bodies
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

// world, engine
var world, engine;
var ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  

  var ground_options={
    'isStatic':true
  }
  ground = Bodies.rectangle(200,height,50,50,ground_options);
  World.add(world,ground);

  var ball_options = {
    'restitution':0.8
  }
  ball = Bodies.circle(100, 200, 10, ball_options);
  World.add(world,ball);
}
  

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10);
}