// Daniel Shiffman
// Transfer Learning Feature Extractor Regression with ml5
// https://youtu.be/aKgq0m1YjvQ

let mobilenet;
let predictor;
let video;
let value = 0;
let slider;
let addButton;
let trainButton;


let NUM_FLIES=50;
let fly, size, weight=1,speed=0.05;
let scribble = new Scribble(); 


function modelReady() {
  console.log('Model is ready!!!');
}

function videoReady() {
  console.log('Video is ready!!!');
}

function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    predictor.predict(gotResults);
  } else {
    console.log(loss);
  }
}


function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    value = result;
    predictor.predict(gotResults);
  }
}

function setup() {
  createCanvas(640, 600);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  predictor = mobilenet.regression(video, videoReady);

  addButton = createButton('add example image');
  addButton.class("button");
  addButton.mousePressed(function() {
    predictor.addImage(slider.value());
  });
  
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position();
  
   trainButton = createButton('train');
  trainButton.class("button");
  trainButton.mousePressed(function() {
    predictor.train(whileTraining);
  });
}

function draw() {
  background(255);
  image(video, 0, 0, 640, 480);
  rectMode(CENTER);
  fill(255, 0, 200);
  //rect(value * width, height / 2, 50, 50);

  fill(0);
  textSize(16);
  text(value, 10, height - 10);
  flies();
  colorFlies();
  sizeFlies();
  eye();
}

function flies() {
  size = random(10);
  weight +=speed;
  stroke(0);
  strokeWeight(weight);
  if(weight<=1 || weight>=3) {
    speed = -speed;
  }
  for (let i=0; i<=NUM_FLIES; i+=1) {
    fill(255);
    scribble.scribbleEllipse((value+random(-0.5,0.5))*width,random(height),size,weight);
  }
}

function colorFlies() {
  size = random(10);
  weight +=speed;
  stroke(random(255));
  strokeWeight(weight);
  if(weight<=1 || weight>=3) {
    speed = -speed;
  }
  for (let i=0; i<=NUM_FLIES; i+=1) {
    random(255,255,255);
    scribble.scribbleEllipse((value+random(-0.5,0.5))*width,value+random(height),size,weight);
  }
}

function sizeFlies() {
  size = random(10);
  weight +=speed;
  stroke(200);
  strokeWeight(weight);
  if(weight<=1 || weight>=3) {
    speed = -speed;
  }
  for (let i=0; i<=NUM_FLIES; i+=1) {
    fill(200);
    scribble.scribbleEllipse((value+random(-0.5,0.5))*width,value+random(height),value*10,weight);
  }
}

function eye() {
  fill(255);
  stroke(0);
  //eyes
  scribble.scribbleEllipse((value * width)+30, height / 3, 75, 75);
  scribble.scribbleEllipse((value * width)+150, height / 3, 75, 75);//right
  stroke(255,200,200);
  fill(0);
  scribble.scribbleEllipse((value * width)+30, height / 3, 30, 30);
  scribble.scribbleEllipse((value * width)+150, height / 3, 30, 30);//right
  //eyebrows
  scribble.scribbleRect((value * width)+30, height / 3-50,70,20);
  scribble.scribbleRect((value * width)+150, height / 3-50,70,20); //right
  
}