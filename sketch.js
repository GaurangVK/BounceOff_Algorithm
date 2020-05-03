var fixedRect, movingRect,obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

obj1=createSprite(100,200,50,30);
obj1.velocityX=5;

obj2=createSprite(800,200,50,30);
obj2.velocityX=-5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

bounceOff(obj1,obj2);
  
  drawSprites();
}

function bounceOff(obj1,obj2){
if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
  && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
obj1.velocityX = obj1.velocityX * (-1);
obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
&& obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
obj1.velocityY = obj1.velocityY * (-1);
obj2.velocityY = obj2.velocityY * (-1);
}
}