var ship 
var groundImage 

function preload(){
shipimage  = loadAnimation('ship-1.png','ship-2.png','ship-3.png')
groundImageimage = loadAnimation('sea.png')
}

function setup(){
  createCanvas(400,400);
  groundImage = createSprite(200,180,20,20)
  groundImage.velocityX = -3
  groundImage.addAnimation('plasma',groundImageimage)

  ship = createSprite(300,300,20,50)

  ship.addAnimation('nitro',shipimage)
ship.scale=0.2
ship.x=50

}

function draw() {
  background("blue");
 drawSprites()
if(groundImage.x<=0){
  groundImage.x=200
}


}