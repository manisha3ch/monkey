
var monkey , monkey_running;
var banana ,imgBanana, objObstacle, imgObstacle;
var grpFood, grpObstacle;
var surTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  imgBanana = loadImage("banana.png");
  imgObstacle = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(50,330,50,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(200,380,400,50); 
  ground.shapeColor="green";
  ground.x = ground.width/2;
  
  // create a group for food
  grpFood = Group();
  grpObstacle = Group(); 
}


function draw() {
  background("lightblue");
   
  textSize(18);
  surTime = Math.ceil(frameCount/frameRate());
  text("Survival time:"+surTime,180,50);
  
  // moving the ground with x velocity of -3
  ground.velocityX = -3;
  
  // resetting the ground after it cross half the canvas
  if(ground.x < 200){
     ground.x = ground.width/2;
     }
  Food();
  obstacles();
  //console.log(monkey.y);
  if(keyDown("space") && monkey.y>=200){
   monkey.velocityY = -8;
   } 
 monkey.velocityY = monkey.velocityY +0.5;
 monkey.collide(ground);
  drawSprites();

}

function Food(){
  if (frameCount%80 === 0){
  banana = createSprite(200,200,15,15);
  banana.addImage(imgBanana);
  banana.y = Math.round(random(120,200));
  banana.scale=0.1;
  banana.velocityX = -3;
  banana.life = width/banana.velocityX;
  banana.depth =monkey.depth;
  monkey.depth =monkey.depth+1;
  grpFood.add(banana);

  }
}

function obstacles(){
  if (World.frameCount % 300 == 0) {
   objObstacle = createSprite(400,345,10,10); 
    objObstacle.addImage(imgObstacle);
    // object obstacle is displayed at y position  
    objObstacle.x = Math.round(random(100,300));
    objObstacle.scale = 0.2;
    // object obstacle moves in left direction
    objObstacle.velocityX = -3;
    // object life time is set to 100
    objObstacle.setLifetime=50;
    // add the obstacle to the obstacle group
    grpObstacle.add(objObstacle); 
  }
}




