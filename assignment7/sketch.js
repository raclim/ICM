let dark;
let street;

let randomMusing;
let randomCreature;
let randomTechnique;
let randomCharacter;
let randomMove;

let line1, line2, line3;

let button = {
  fetch:' ',
  another: ' '
};

let numMoves; 

let speed1 = 0.08;
let speed2 = 0.05;
let speed3 = 0.1;
let speed4 = 3;
let speed5 = 5;
let a = 1;
let b = 1; 
let c = 1;
let ellipseY = 0;
let ellipse2Y = -10;

function preload() {
  street = loadJSON('fighter.json');
  dark = loadJSON('darksouls.json');
}
function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth,windowHeight);
  button.fetch = createButton("I WANT MY POEM");
  button.fetch.class("button");
  button.fetch.position(width/2,height/2);
  button.fetch.mousePressed(gamePoem);   
}

function gamePoem() {
  fill(255);
  //noStroke();
  button.fetch.hide();
  //streetFighter
  randomCharacter = floor(random(street.characters.length));
  randomMove = floor(random(street.characters[randomCharacter].moves.length));
  numMoves = street.characters[randomCharacter].moves.length;
  
  line1 = createP('');
  line1.html(street.characters[randomCharacter].moves[randomMove] + '!');
  line1.class("poem");
  line1.position(windowWidth/2,windowHeight/2-125);
  //darkSouls
  randomMusing = floor(random(dark.words.musings.length));
  randomTechnique = floor(random(dark.words.techniques.length));
  randomCreature = floor(random(dark.words.creatures.length));
  
  line2 = createP('');
  line2.html(dark.words.techniques[randomTechnique]);
  line2.class("poem");
  line2.position(width/2,height/2-75);
  
  line3 = createP('');
  line3.html(dark.words.musings[randomMusing]);
  line3.class("poem");
  line3.position(width/2,height/2-25);
  //createP(dark.words.creatures[randomCreature]); 
  more();
}

function more() {
  button.another = createButton("I LIKE IT. ANOTHER!");
  button.another.class("button");
  button.another.position(width/2,height/2+60);
  button.another.mousePressed(reset);
}

function reset() {
  line1.hide();
  line2.hide();
  line3.hide();
  gamePoem();
}
function draw() {
  background(255);
  doodle();
}

function doodle() {
  if (numMoves < 5) {
    lessFive();
  }
  else if (numMoves == 5) {
    five();
  }
  else if (numMoves >5) {
    moreFive();
  }
}

function lessFive() {
  stroke(255);
  fill(175);
  a += speed1;
  strokeWeight(a);
  if (a <= 0 || a > 3) {
      speed1 = -speed1;
  }
  for (let x = width; x > 0; x-=width/20) {
    for (let y = height; y > 0; y-=height/20) {
      fill(600-x,700-y,250-x);
      rect(width/2,height/2,x,y);
    }
  }
  fill(255);
  noStroke();
  rect(width/2,height/2,500,300);
}
function five() {
  fill(255);
  b += speed2;
  strokeWeight(b);
  if (b <= 1 || b >= 15) {
    speed2 = -speed2;
  }
  // for (let x = 0; x <width; x+=width/5) {
  //   for (let y = 0; y <height; y+=height/5) {
  //     ellipse(x+sin(0.5),y+random(-0.5,5),5,5);
  //   }
  for (let x = 0; x <width; x+=width/5) {
    stroke(100,255,100,150);
    ellipse(x,ellipseY+=speed4,50,50);
    stroke(255,100,100);
    ellipse(x,ellipse2Y+=speed5,50,50);
  }
  if (ellipseY>height) {
    ellipseY = 0;
    ellipse2Y = -10;
  }
  fill(255);
  noStroke();
  //rect(width/2,height/2,500,300);
}
function moreFive(){
  stroke(100,100,255);
  fill(255);
  c += speed3;
  strokeWeight(c);
  if (c <= 0 || c > 8) {
    speed3 = -speed3;
  }
  for (let x = 0; x <width; x+=width/20) {
    for (let y = 0; y <height; y+=height/20) {
      rect(x,y,4,4);
    }
  }
  fill(255);
  noStroke();
  rect(width/2,height/2,500,300);
}