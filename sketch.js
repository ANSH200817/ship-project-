var ship 
var groundImage 

function preload(){
shipimage  = loadAnimation('ship-1.png','ship-2.png','ship-3.png')
groundImageimage = loadAnimation('sea.png')
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(300,160,20,50)
  ship.addAnimation('nitro',shipimage)
ship.scale=0.2
ship.x=50
groundImage = createSprite(200,180,20,20)
groundImage.addAnimation('plasma',groundImageimage)
}

function draw() {
  background("blue");
 drawSprites()
}