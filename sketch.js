var fixedRect, movingRect;
var go1, go2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 70, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(200, 200, 50, 80);
  movingRect.shapeColor = "red";
  go1 = createSprite(300, 200, 50, 50);
  go1.shapeColor = "yellow";
  go2 = createSprite(400, 100, 50, 50);
  go2.shapeColor = "pink";
}

function draw() {
  background(0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, go1)){
    movingRect.shapeColor = "blue";
    go1.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "red";
    go1.shapeColor = "red";
  }

  drawSprites();
}
