var fixedRect, movingRect, skullslasher, skullbreaker, skullgrinder, skullthrasher

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  skullslasher = createSprite(100, 200, 50, 80);
  skullslasher.shapeColor = "green";
  skullslasher.debug = true;
  skullbreaker = createSprite(200, 200, 50, 80);
  skullbreaker.shapeColor = "green";
  skullbreaker.debug = true;
  skullgrinder = createSprite(300, 200, 50, 80);
  skullgrinder.shapeColor = "green";
  skullgrinder.debug = true;
  skullthrasher = createSprite(400, 200, 50, 80);
  skullthrasher.shapeColor = "green";
  skullthrasher.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if (collisionDetection(skullthrasher,movingRect))
 {
 movingRect.shapeColor = "red";
 skullthrasher.shapeColor = "red";
 }
 else
{
movingRect.shapeColor = "green";
skullthrasher.shapeColor = "green";
}
 
  drawSprites();
}
