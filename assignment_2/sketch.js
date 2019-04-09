let x,y,z;
let r,g,b;
let ay,be,see;
let h,i,j;
let j1,j2,j3;
let stickR, stickG, stickB;

let circleX, slimeY;

let xSpeed = 1;
let x1Speed = 1;
let ySpeed = 1;

function setup() {
  createCanvas(500, 400);
  ellipseMode(RADIUS);
  rectMode(RADIUS);
  frameRate(20);
  
  circleX = 110;
  slimeY = height*(.85);

  stickR = random(100,200);
  stickG = random(100,200);
  stickB = random(100,200);
}

function draw() {
  background(245);
  strokeJoin(ROUND);

  
  //main liquid
  r = random(170,255);
	g = random(170,255);
	b = random(170,255);
  
  //almost main liquid

  x = random(225,255);
  y = random(225,255);
  z = random(225,255);
  
  //next innermost liquid
  ay = random(230,255);
  be = random(230,255);
  see = random(230,255);
  
  //innermost liquid
  h = ay-10;
  i = be-10;
  j = see-10;
  
  //jewelry random
  j1 = random(150,255);
	j2 = random(150,255);
	j3 = random(150,255); 
  
  //window
  noStroke();
  fill(194,196,249);
  rect(250,130,200,40);
  
  //moon
  fill(249,255,204);
  arc(390,90,40,40,TWO_PI,PI);
  
  //clouds
  fill(255,210);
	ellipse(circleX+100,(height/4)+30,40,10); //cloud left
  ellipse(circleX-10,(height/4)+28,15,10);
  if (circleX > 200 || circleX <100) {
    xSpeed = xSpeed*-1;
  }
  circleX = circleX - xSpeed;
  
  ellipse(circleX+180,((height/4)+5)+30,70,10); //cloud right
  ellipse(circleX+180,(height/4)+28,30,15);
  ellipse(circleX+210,(height/4)+35,15,10);
  if (circleX > 350 || circleX <280) {
    x1Speed = x1Speed*-1;
  }
  circleX = circleX + x1Speed;
  
  
  //hat
  noStroke();
  fill(200);
  ellipse(150,85,60,50);
  
  //back - hair
  fill(0);
  quad(115,120,185,120,195,135,105,135);
  
  //head
  noStroke();
  fill(255);
  ellipse(150,100,40,40);
  
  //ears
  fill(240);
  arc(116.5,118,10,10,radians(60),radians(240)); //left
  arc(185,118,10,10,radians(290),radians(130)); //right
  
  //earrings
  fill(j1,j2,j3);
  triangle(118,125,116,136,120,136); //left
  triangle(182,125,180,136,184,136); //right
  
  //eyes - left
  fill(0);
  let leftEye = map(mouseX,0,500,125,133);
  ellipse(leftEye,100,4,4); //pupil
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(130,105,10,10,radians(210),radians(330)); //lid
  
  //lashes - left
  arc(121,97,2,2,radians(30),radians(180));
  arc(126,94,2,2,radians(60),radians(180));

  //eyes - right 
  noStroke();
  fill(0);
  let rightEye = map(mouseX,0,500,159,166);
  ellipse(rightEye,100,4,4); //pupil
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(165,105,10,10,radians(210),radians(330)); //lid 
  
  //lashes - right
  arc(174,97,2,2,TWO_PI,radians(150));
  arc(169,94,2,2,TWO_PI,radians(120));
  
  //nose
  strokeWeight(2);
  stroke(100);
  arc(147,110,2,2,radians(30),radians(150));
  
  //mouth
  stroke(0);
  arc(147,115,10,10,radians(50),radians(130));
  
  //bangs - hair
  strokeWeight(1);
  fill(0);
  stroke(0);
  beginShape();
  vertex(157.17,59.99);
  bezierVertex(140.6,82.96,138.30,76.16,147.3,76.7);//middle-right
  bezierVertex(153.3,87.7,120.67,87.16,143.3,59.7);//middle-left
  bezierVertex(170.17,59.99,140,67,183,75); //right
  bezierVertex(183,75,177,71,170.17,59.99); //right
  endShape();
  
  //blush
  noStroke();
  fill(255,200,200);
  ellipse(125,113,7,7);
  ellipse(170,113,7,7);
  
  //neck
  fill(255);
  rect(148,140,6,3);
  
  //body
  fill(255,100,100);
  quad(130,143, 166,143, 172,180, 124,180); //torso
  fill(255,100,100);
  quad(124,180, 172,180, 176,200, 120,200);
  rect(148,190,23,10); //skirt
  
  //brooch
  fill(j1,j2,j3);
  ellipse(149,147.5,5,5);
  fill(255,100,100);
  ellipse(149,146.5,2.5,2.5);
  
  //pot
	noStroke();
  fill(30);
  ellipse(150,243,135,50); //rim
  fill(0);
  ellipse(150,300,140,80)//bowl
  
  let wow = mouseX/7;
  fill(r-wow,g-wow,b-wow);
  ellipse(150,250,115,40); //liquid
  fill(x-wow,y-wow,z-wow,220);
  ellipse(150,250,100,30); //medium liquid
  fill(ay-wow,be-wow,see-wow,220);
  ellipse(150,250,80,20); //inner liquid
  fill(h-wow,i-wow,j-wow,220);
  ellipse(150,250,50,10); //innermost liquid
  
  fill(r-wow,g-wow,b-wow);
  ellipse(width/4,298.7,40,20);
  rect((width/4)-3,slimeY,30,38.5,18);
  rect((width/4)-25,slimeY+35,15,15,10);
  
  slimeY = slimeY + ySpeed;
  if (slimeY > 340 || slimeY <318) {
    ySpeed = ySpeed*-1;
  }
  
  //bubbles
  fill(j1-wow,j2-wow,j3-wow,100);
  ellipse(100-wow,200-wow,10-wow/4,10);
  ellipse(70-wow,170-wow,15-wow/4,15);
  ellipse(55-wow,155-wow,18-wow/4,18);
  ellipse(150-wow,190-wow,13-wow/4,13);
  ellipse(160-wow,185-wow,16-wow/4,16);
  fill(255);
  ellipse(104-wow,200-wow,2,2);
  ellipse(74-wow,170-wow,2,2);
  ellipse(154-wow,190-wow,2,2);
  
  //arms
  strokeWeight(13);
  stroke(255);
  noFill();
  let leftArmX = map(mouseX,0,500,80,180);
  let leftArmY= map(mouseY,0,500,80,180);
  
  let rightArmX = map(mouseX,0,500,80,180);
  let rightArmY= map(mouseY,0,500,80,180);
  
  line(130,148,leftArmX,leftArmY); //leftArm
  line(169,148,rightArmX,rightArmY+15); //rightArm
  
  //stir stick
  strokeWeight(11);
	stroke(stickR,stickG,stickB);
  let stickX = map(mouseX,0,500,80,180);
  let stickY= map(mouseY,0,500,240,240);
  line(stickX,50,stickX,stickY);
  
  //animal
  noStroke();
  fill(150);
  ellipse(390,235,45,27);
  fill(70);
  ellipse(390,250,30,25); //head
  ellipse(400,245,20,25); //head-2
  ellipse(390,280,40,35); //torso
  ellipse(410,300,15,15); //right-foot
  ellipse(370,300,15,15); //left-foot
  ellipse(414,250,15,15); //ear-right
  ellipse(375,240,15,15); //ear-left
  ellipse(370,255,15,15); //ear-left-left
  fill(0);
  ellipse(375,245,3,3); //eyes-left
  ellipse(400,245,3,3); //eye-right
  
  strokeWeight(4);
  stroke(0);
  noFill();
  let omg = random(-2,2);
  line(372,235+omg,375,235.5+omg); //eyebrow-left
  line(397,235.5+omg,400,235+omg); //eyebrow-right
  strokeWeight(2);
  triangle(384,250,388,250,386,251);//nose
  
  noStroke();
  fill(255,200,200.100);
  ellipse(369,253,4,4);//blush-left
  ellipse(406,253,4,4);//blush-right
  
  //animal brooch
  fill(j1,j2,j3);
  ellipse(387,265,4,4);
  fill(70);
  ellipse(387,264,2.5,2.5);
}

function mousePressed() {
  stickR = random(100,200);
  stickG = random(100,200);
  stickB = random(100,200);
}