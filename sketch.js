var canvas;
var block1, block2, block3, block4,blocksGroup;
var ball, edges;
var music;

function preload() {
  // load sound here
  music = loadSound("music.mp3");
}

function setup() {
  canvas = createCanvas(800, 600);
  music.play();
  blocksGroup = new Group;

  block1 = createSprite(80, 580, 200, 30);
  block1.shapeColor = "blue";
  blocksGroup.add(block1);

  block2 = createSprite(295, 580, 200, 30);
  block2.shapeColor = "orange";

  block3 = createSprite(510, 580, 200, 30);
  block3.shapeColor = "red";
  blocksGroup.add(block3);

  block4 = createSprite(730, 580, 200, 30);
  block4.shapeColor = "green";
  blocksGroup.add(block4);

  ball = createSprite(400, 200, 40, 40);
  ball.shapeColor = rgb(255, 255, 255);
  ball.velocityX = 5;
  ball.velocityY = 7;
}

function draw() {
  background(rgb(169, 169, 169));
  
  edges = createEdgeSprites();
  ball.bounceOff(edges);
  
  if(isTouching(ball, block2)){
    ball.shapeColor="orange";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
  }
  else{
    ball.shapeColor="white";
  }
  bounceOff(ball,block1);
  bounceOff(ball,block3);
  bounceOff(ball,block4);
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
      object2.x - object1.x < object2.width/2 + object1.width/2 &&
      object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){
    return true;  
  }
  else{
    return false;
  }
}

function bounceOff(object1,object2){
  
  if (object1.x- object2.x< object2.width/2+ object1.width/2 &&
      object2.x- object1.x< object2.width/2+ object1.width/2){
      object1.velocityX = object1.velocityX*-1;
      object2.velocityX = object2.velocityX*-1;
  }
  
  if (object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY*-1;
      object2.velocityY = object2.velocityY*-1;
  }
}
