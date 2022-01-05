const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var rope;
var fruit;
var fruit_con;

var backgroundImg;
var fruitImg;
var bunnyImg;

var bunny;
var button_1;

function preload(){
backgroundImg = loadImage("background.png");
fruitImg = loadImage("melon.png");
bunnyImg = loadImage("rabbit-01.png");
}


function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground (250,690, 600, 10);
  rope = new Rope (6,{x:245,y:30})

  bunny = createSprite(250,630,100,100);
  bunny.addImage(bunnyImg);
  bunny.scale = 0.2;

  button_1 = createImg("cut_button.png");
  button_1.position(220,30);
  button_1.size(50,50);
  button_1.mouseClicked(drop);
  
  var fruitOptions = {
    density:0.001
  }
  fruit = Bodies.circle(300, 300, 15, fruitOptions);
  Matter.Composite.add(rope.body, fruit);

  fruit_con = new Link(rope,fruit)
}

function draw() 
{
  background(51);
  image(backgroundImg, width/2, height/2, width, height);
  Engine.update(engine);
  ground.show();
  rope.show();
  image(fruitImg, fruit.position.x, fruit.position.y, 60, 60);

  drawSprites();
}

function drop(){
  rope.break();
  fruit_con.detach();
  //fruit_con = null;
}




