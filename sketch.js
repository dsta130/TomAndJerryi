var backGroundImg,cat,mouse
var catMoving, catSitting1, catSitting2
var mouseStanding,mouseMocking,mouseStanding2 

function preload() {
    //load the images here
    backGroundImg=loadImage("images/garden.png")
    catMoving=loadAnimation("images/cat2.png" , "images/cat3.png")
    catSitting1=loadAnimation("images/cat1.png")
    catSitting2=loadAnimation("images/cat4.png")
    mouseStanding=loadImage("images/mouse1.png")
    mouseMocking=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseStanding2=loadImage("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat=createSprite(870,600,50,50)
    cat.addAnimation("sitting1", catSitting1)
    cat.scale=0.2

    mouse=createSprite(200,600,50,50)
    mouse.addAnimation("cheese", mouseStanding)
    mouse.scale=0.2
}

function draw() {

    background(backGroundImg);
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("finalPosition", catSitting2)
        cat.changeAnimation("finalPosition",catSitting2)
        mouse.addAnimation("finalposition", mouseStanding2)
        mouse.changeAnimation("finalposition",mouseStanding2);
    }  

    drawSprites();
}




function keyPressed(){

  if(keyDown("space")){
      cat.velocityX=-5
      cat.addAnimation("moving",catMoving)
      cat.changeAnimation("moving",catMoving)
      mouse.addAnimation("mocking",mouseMocking)
      mouse.changeAnimation("mocking",mouseMocking)
  }
  


}