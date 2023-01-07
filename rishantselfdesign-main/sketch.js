var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ninja , ninja_running , ninja_collided,ninja_jumping
var bg , in_ground

var ob1 , ob2 , score=0

var gameOver
var checkPointSound

var enemy1,enemy2, enemy3, enemy4, enemy5

function preload(){
ninja_running = loadAnimation ("Images/R-1.png","Images/R-2.png" , "Images/R-3.png"  )
ninja_collided = loadAnimation ("Images/R-4.png");
ninja_jumping = loadAnimation("Images/J-1.png","Images/J-2.png","Images/J-3.png","Images/J-4.png");

bgImage = loadImage ("Images/BG-1.png");

ob1 = loadImage ("Images/Plate 2.png");
ob2 = loadImage ("Images/plate 3.png");

gameoverImg = loadImage ("Images/plate.png");
restartImg = loadImage  ("Images/restart.png");

enemy1= loadImage("Images/enemy1.png");
enemy2= loadImage("Images/enemy2.png");
enemy3= loadImage("Images/enemy3.png");
enemy4= loadImage("Images/enemy4.png");
enemy5= loadImage("Images/enemy5.png");
}

function setup() {
 createCanvas (windowWidth,windowHeight);

  bg = createSprite(640,height-70,1280,20);
  bg.visible=false;

  //bg.addImage("Images/bg",bgImage);
  

 ninja = createSprite(80,height+200,20,50);
 ninja.addAnimation("running",ninja_running);
 ninja.addAnimation("collided",ninja_collided);
 ninja.addAnimation("jumping",ninja_jumping);
 ninja.scale = 1;
 
  
  gameover = createSprite(300,100);
  gameover.addImage(gameoverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
 gameover.scale = 0.8;
  restart.scale = 0.67;
  
 obGroup = createGroup();
  
 ground = createSprite(640,height-80,1280,20);
 ground.visible=false
}

 function draw(){ 
    background(bgImage)
 
  
     gameover.visible = false;
     restart.visible = false;
      
     bg.velocityX = -3
      
      score = score + Math.round(getFrameRate()/60);
      
      if(score>0 && score%100 === 0)
      
    if (bg.x <= 0){
       bg.x = bg.width/2
      }
      
      plate()
     //enemy()

      if(keyWentDown("space")){
        ninja.velocityY=-10
        ninja.changeAnimation("jumping")

      }
      if(keyWentUp("space")){
        ninja.changeAnimation("running")
      }
      ninja.velocityY=ninja.velocityY+0.8
     
      ninja.collide(ground)

      if(obGroup.isTouching(ninja)){
        
      ninja.velocityY=0

      }
  drawSprites()
  textSize(20)
 text("Score: "+ score, 500,50);

}

/*function enemy(){}
if(frameCount%160===0){
enemy = createSprite(width-50,10,10,10);
enemy.y=Math.round(random(300,100))
}*/

function plate(){
if(frameCount%160===0){
 ob = createSprite(10,10,10,10);
 ob.x = Math.round(random(300,500));
ob.y = Math.round(random(200,250));
ob.velocityX = -3

obGroup.add(ob);
var rand = Math.round(random(1,2))
switch(rand){
  case 1: ob.addImage(ob1);
  break;
case 2: ob.addImage(ob2);
}

}

}




