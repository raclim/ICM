let mooning;
let spooning;

const NUM_STAR = 300;
const NUM_CLOUDS = 5;
let starStuff = {
  wow:[], 
  x: [],
  y: []
};

let starMove = {
  mow: []
};

let cloudStuff = {
  clouds:[],
  x:[],
  y:[]
};

function setup() {
  createCanvas(600, 600);
  ellipseMode(CENTER);
  mooning = new moon();
  spooning = new spoon();
  initialStars();
  initialClouds();
}

function draw() {
  background(0);
  mooning.show();
  mooning.rolled();
  showClouds();
  showStars();
  
  spooning.show();
  console.log(mooning.circleSize);
}

function initialStars() {
    for (i=0; i<NUM_STAR; i+=1){
      //static stars
      starStuff.x[i] = random(width);
      starStuff.y[i] = random(height);
      starStuff.wow[i] = new stars(starStuff.x[i],starStuff.y[i])
      
      //moving stars
      starMove.mow[i] = new movingStars(random(-300,500),random(-300,500))
  }
}

function initialClouds() {
  //random clouds
  for (h=0;h<NUM_CLOUDS; h+=1){
    cloudStuff.x[h] = random(width);
    cloudStuff.y[h] = random(0,500);
    cloudStuff.clouds[h] = new cloud(cloudStuff.x[h],cloudStuff.y[h])
  }
}

function showStars() {
  for (i=0; i<NUM_STAR; i+=1){
  	starStuff.wow[i].show();
    starMove.mow[i].show();
    
    //constellations
    if(i%40==0) {
      stroke(255);
      strokeWeight(1);
      for (oh=0;oh<30;oh+=random(10)) {
      	line(starStuff.x[i],starStuff.y[i],starStuff.x[i]+oh,starStuff.y[i]+oh);
      }
    }
  }
}

function showClouds() {
  for (h=0; h<NUM_CLOUDS; h+=1){
  	cloudStuff.clouds[h].show();
    cloudStuff.clouds[h].update();
  }
}