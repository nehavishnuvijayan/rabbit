var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



var random = Math.random(50,350);
console.log(random);

}


function draw() 
{
  background(180);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  

  spwanApple();
  spwanLeaf();
  drawSprites();
}

function spwanApple() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY = 1;
  apple.scale = 0.100;
}

function spwanLeaf() {
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.velocityY = 1;
  leaf.scale = 0.100;
}

var rand = Math.round(random(1,2));

if (frameCount % 80 == 0) {
 
  if (apple == 1) 
  {
   spwanApple(); 
  }
  else
  {
   spwanLeaf();
  }

}
  

  


