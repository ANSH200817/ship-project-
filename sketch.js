var ship 
var groundImage 

function preload(){
ship  = loadAnimation('ship-1.png')
groundImage = loadAnimation('sea.png')
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,20,50)
ship.scale=0.5
ship.x=50
}

function draw() {
  background("blue");
 
}