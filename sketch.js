var fixedRect, movingRect;
var rectangle1,rectangle2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rectangle1 = createSprite(200, 100, 50, 80);
  rectangle1.shapeColor = "green";

  rectangle2 = createSprite(600, 100, 50, 80);
  rectangle2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  rectangle2.x=World.mouseX;
rectangle2.y=World.mouseY;

  if (isTouching(rectangle2,rectangle1)){
   rectangle1.shapeColor="red";
   rectangle2.shapeColor="red"; 
  }
  else {
    rectangle1.shapeColor="green";
    rectangle2.shapeColor="green";   
  }

 bounceOff(movingRect,fixedRect);
  drawSprites();
}

