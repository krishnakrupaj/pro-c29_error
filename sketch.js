const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,polygon
var ground,stage1,stage2
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21
var b22,b23,b24,b25,b26,b27

function setup() {
  
  var canvas = createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(395,400,800,10);
    stage1 = new Ground(400,360,200,20);
    stage2 = new Ground(612.5,255,125,10);

    //row 1
    b1 = new Box(337.5,337.5,25,25);
    b2 = new Box(362.5,337.5,25,25);
    b3 = new Box(387.5,337.5,25,25);
    b4 = new Box(412.5,337.5,25,25);
    b5 = new Box(437.5,337.5,25,25);
    b6 = new Box(462.5,337.5,25,25);
    //row 2
    b7  = new Box(350,312.5,25,25);
    b8  = new Box(375,312.5,25,25);
    b9  = new Box(400,312.5,25,25);
    b10 = new Box(425,312.5,25,25);
    b11 = new Box(450,312.5,25,25);
    //row 3
    b12 = new Box(362.5,287.5,25,25);
    b13 = new Box(387.5,287.5,25,25);
    b14 = new Box(412.5,287.5,25,25);
    b15 = new Box(437.5,287.5,25,25);
    //row 4
    b16 = new Box(375,262.5,25,25);
    b17 = new Box(400,262.5,25,25);
    b18 = new Box(425,262.5,25,25);
    //row 5
    b19 = new Box(387.5,237.5,25,25);
    b20 = new Box(412.5,237.5,25,25);
    //row 6
    b21 = new Box(400,212.5,25,25);

    //stage2
    //row 1
    b22 = new Box(587.5,237.5,25,25);
    b23 = new Box(612.5,237.5,25,25);
    b24 = new Box(637.5,237.5,25,25);
    //row 2
    b25 = new Box(600,212.5,25,25);
    b26 = new Box(625,212.5,25,25);
    //row 3
    b27 = new Box(612.5,187.5,25,25);

    //slingShot
    polygon = Bodies.circle(75,350,50);
    World.add(world,polygon);

    sling = new SlingShot(polygon,{x:100,y:350});
   
}

function draw() {
  background(200,255,200);

  ground.display();
 
  //block tower 1
  stage1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  //block tower 2
  stage2.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();

  //rock
  sling.display();
  
  mouseDragged();
  mouseReleased();
  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(polygon.body,mouseX,mouseY)
}


function mouseReleased(){
  sling.fly();
}
