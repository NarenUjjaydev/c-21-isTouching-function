var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(800,600);

  fixedRect = createSprite(400, 300, 50, 80);
  movingRect = createSprite(500, 200, 80, 50);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;
}


function draw() {
  background("black");  

  movingRect.shapeColor = "green";
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameObject1)===true){
   gameObject1.shapeColor = "blue";
   movingRect.shapeColor = "blue";
  }
  else{
   gameObject1.shapeColor = "green";
  // movingRect.shapeColor = "green";
  }
  if (isTouching(movingRect,gameObject2)===true){
    gameObject2.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
   }
   else{
    gameObject2.shapeColor = "green";
    //movingRect.shapeColor = "green";
   }
   if (isTouching(movingRect,gameObject3)===true){
    gameObject3.shapeColor = "red";
    movingRect.shapeColor = "red";
   }
   else{
    gameObject3.shapeColor = "green";
    //movingRect.shapeColor = "green";
   }
   if (isTouching(movingRect,fixedRect)===true){
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
   }
   else{
    fixedRect.shapeColor = "green";
    //movingRect.shapeColor = "green";
   }
  drawSprites();
}
