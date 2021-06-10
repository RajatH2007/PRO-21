var canvas;
var block1, block2, block3, block4,blocksGroup;
var ball, edges;
var music;

function preload() {
  // load sound herez
}

function setup() {
  canvas = createCanvas(800, 600);
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
  
  isTouching();
  bounceOff();
  drawSprites();
}

function isTouching(){
  if (ball.x - block2.x < block2.width/2 + ball.width/2 && 
      block2.x - ball.x < block2.width/2 + ball.width/2 &&
      ball.y - block2.y < block2.height/2 + ball.height/2 &&
      block2.y - ball.y < block2.height/2 + ball.height/2){
      ball.velocityX=0;
      ball.velocityY=0;
      ball.shapeColor = "orange";   
  }

function bounceOff()
  
  if (ball.x- block1.x< block1.width/2+ ball.width/2 &&
      block1.x- ball.x< block1.width/2+ ball.width/2&&
      ball.x- block3.x< block3.width/2+ ball.width/2 &&
      block3.x- ball.x< block3.width/2+ ball.width/2&&
      ball.x- block4.x< block4.width/2+ ball.width/2 &&
      block4.x- ball.x< block4.width/2+ ball.width/2){
      ball.velocityX = 5;
      ball.velocityY = 7;

  }
  
  if (ball.y- block1.y< block1.height/2+ ball.height/2 &&
    block1.y- ball.y< block1.height/2+ ball.height/2&&
    ball.y- block3.y< block3.height/2+ ball.height/2 &&
    block3.y- ball.y< block3.height/2+ ball.height/2&&
    ball.y- block4.y< block4.height/2+ ball.height/2 &&
    block4.y- ball.y< block4.height/2+ ball.height/2){
      ball.velocityX = 5;
      ball.velocityY = 7;

  }
     
  
  }
