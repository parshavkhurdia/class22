const Engine = Matter.Engine;
  const  World = Matter.World;
  const  Bodies = Matter.Bodies;
var engine,ground;

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
   world=engine.world;

   var ground_options={
     isStatic:true,
     friction:0,
     slop:2
   }
    ground = Bodies.rectangle(400, 380, 800, 20,ground_options);
   World.add(world,ground)
   console.log(ground);
   var ball_options={
     restitution:0.8,
     friction:0,
     speed:2,
     slop:2
   }
   ball=Bodies.circle(200,200,23,ball_options);
World.add(world,ball)
console.log(ball);
}

function draw() {
  background(0,255,255);  
  Engine.update(engine);
  //write code to display ground
  fill("red");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)

  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,23,23)

  drawSprites();
}