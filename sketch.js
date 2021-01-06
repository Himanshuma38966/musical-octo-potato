const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;






var man,manimg;
var ground;
var drops=[];







function preload(){
 manimg=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
}




function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  ground=createSprite(400,350,1000,10)
  
  man=createSprite(100,300,900,20)
  man.addAnimation("moving",manimg);
  man.scale=0.1;
  
  

if(frameCount % 60=== 0){
for(i=0;i<100;i++){
  drops.push(new Drop(random(0,400),random(0,400)))
}
}
}

function draw() {
  background(0);
  Engine.update(engine);
 for(var j=0;j<100;j++){
   drops[j].display();
   drops[j].updates();
 }
   drawSprites();
}

 
