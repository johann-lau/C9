var sprite

function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,20,20)
}

function draw() 
{
  background("cyan");
  if (keyDown("LEFT")) {
    sprite.x = sprite.x - 5
  }
  if (keyDown("RIGHT")) {
    sprite.x = sprite.x + 5
  }
  if (keyDown("UP")) {
    sprite.y = sprite.y - 5
  }
  if (keyDown("DOWN")) {
    sprite.y = sprite.y + 5
  }
  drawSprites()
}




