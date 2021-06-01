
var fixedRect, movingRect;
var gameObject1, gameObject2;
var stationaryRect;
var stationaryRect1;
var movingRect1;
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  
  movingRect1=createSprite(500,300,50,50);
  movingRect1.shapeColor="blue";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  stationaryRect=createSprite(400,250,50,50);
  stationaryRect.shapeColor="yellow";

  stationaryRect1=createSprite(200,200,50,50);
  stationaryRect1.shapeColor="pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }else if(isTouching(movingRect,stationaryRect)){
    movingRect.shapeColor = "blue";
    stationaryRect.shapeColor = "blue";
  }else if(isTouching(movingRect,stationaryRect1)){
    movingRect.shapeColor="blue";
    stationaryRect1.shapeColor="blue";
  }else if(isTouching(movingRect,movingRect1)){
    movingRect1.velocityX=5;
  }
  
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
    stationaryRect.shapeColor="yellow"; 
    stationaryRect1.shapeColor="pink"; 
    movingRect1.velocityX=0;
  }
 

  drawSprites();
}



