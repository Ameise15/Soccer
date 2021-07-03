

var ball,ballImg;
var bgImg;
var player1,player1Img;
var player2,player2Img;
var edges;
var score1=0;
var score2=0;

function preload() {
  ballImg=loadImage("Ball.png");
  bgImg=loadImage("field.jpeg")
  player1Img=loadAnimation("Player1-a.png","Player1-b.png","Player1-c.png","Player1-d.png");
  player2Img=loadAnimation("Player2-a.png","Player2-b.png","Player2-c.png","Player2-d.png");
}

function setup() {
  createCanvas(1200,800);
  ball=createSprite(600,400);
  ball.addImage(ballImg);
  ball.scale=0.03;
  player1=createSprite(100,400);
  player1.addAnimation("run",player1Img);
  player1.scale=0.4;
  player2=createSprite(1100,400);
  player2.addAnimation("run",player2Img);
  player2.scale=0.4;
  edges=createEdgeSprites();
}

function draw() {
  background(bgImg);
  if (keyDown("w")) {
    player1.velocityY=-10;
  }
  if (keyDown("s")) {
    player1.velocityY=10;
  }
  if (keyDown("up_arrow")) {
    player2.velocityY=-10;
  }
  if (keyDown("down_arrow")) {
    player2.velocityY=10;
  }
  if (keyDown("space")){
      ball.velocityX=-9
      ball.velocityY=9
  }
  player1.bounceOff(edges);
  player2.bounceOff(edges);
  ball.bounceOff(edges);
  ball.bounceOff(player1);
  ball.bounceOff(player2);
  if (ball.x<20){
    ball.velocityX=0;
    ball.velocityY=0;
    ball.x=600;
    ball.y=400;
    score2=score2+1
  }
  if (ball.x>1180){
    ball.velocityX=0;
    ball.velocityY=0;
    ball.x=600;
    ball.y=400;
    score1=score1+1
  }
  
  drawSprites();
  textSize(30);
  fill("white")
  text(score1,400,400);
  text(score2,800,400);
  if (score1>9) {
    textSize(50)
    fill("red")
    text("Player 1 wins!",550,350);
  }
  if (score2>9) {
    textSize(50)
    fill("red")
    text("Player 2 wins!",550,350);
  }
}