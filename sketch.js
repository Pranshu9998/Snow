function setup() {
  createCanvas(displayWidth,displayHeight);
  createSprite();
}
function preload() {
  snow1 = loadImage("snow1.jpg");
  snow2 = loadImage("snow2.jpg");
  snow3 = loadImage("snow3.jpg");
  snow4 = loadImage("snow4.webp");
  snow5 = loadImage("snow5.webp");
  }
  
function draw() {
  background(snow2);
  if (frameCount % 60 === 0) {
    snowflake = createSprite(random(0,displayWidth),0,10,10);
    snowflake.velovityX = 0
    snowflake.velocityY = 2
    snowflake.addImage(snow4);
    snowflake.scale = 0.2;
  }

 
 
  
  drawSprites();
}
