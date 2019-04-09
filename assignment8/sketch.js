let response = ['I know','you too','same','you monkey'];
let chosenResponse;
let fly, opera, mario, coin, jump, death, shining;
let mic, amp, vol;
let starting;
let ming, ding,wing,bing;
let speech = new p5.Speech(); 
let speechRec = new p5.SpeechRec(); 
speechRec.continuous = true; 
speechRec.interimResults = false; 

NUM_FACE = 60;
let leftEye, rightEye;
let faceStuff = {
  faces:[],
  x:[],
  y:[]
};

function preload() {
  fly = loadSound('flymetothemoon.wav');
  fly.rate(1.5);
  opera = loadSound('opera.wav');
  opera.rate(1.2);
  mario = loadSound('mario.wav');
  coin = loadSound('coin.wav');
  jump = loadSound('jump.wav');
  death = loadSound('sound.wav');
  shining = loadSound('shining.wav');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  amp = new p5.Amplitude();
  speechRec.start();
  speechRec.onResult = gotSpeech;
  initialFaces();
  starting = createButton("let's sing");
  starting.position(width/2-30,height/2-20);
  starting.class("button");
  starting.mousePressed(firstSpeech);
  randoResponse();
}

function randoResponse() {
  chosenResponse = floor(random(response.length));
  console.log(chosenResponse);
}

function firstSpeech() {
  starting.hide();
  mario.setVolume(0.9);
  mario.loop();
  wing = createP("tell me i am stupid. i dare you");
  wing.position(width/2,height/2);
  wing.class("prompt");
  fill(255);
  stroke(0);
  rect(width/2,height/2,100,100);
}

function gotSpeech() {
  wing.hide();
  if (speechRec.resultValue) {
    lines();
    if (fly.isPlaying() ) { 
    	fly.stop();
  	} else {
    	fly.play();
  	}
  } 
}

function lines() {
  if (speechRec.resultString == "you are stupid") {
    ding = createP('');
    ding.html(speechRec.resultString);
    console.log(speechRec.resultString);
    ding.position(width/2, height/2+50);
    ding.class("lines");
    console.log(response[chosenResponse]);
  	speech.speak(response[chosenResponse]);
    ming = createP(response[chosenResponse]);
    ming.position(random(width*3/4),random(height*3/4));
    ming.class("lines");
    if (chosenResponse == 0) {
      coin.play();
    } else if (chosenResponse == 1) {
      death.loop();
      death.setVolume(1);
    } else if (chosenResponse ==2) {
      shining.loop();
      shining.setVolume(0.5);
  	}
    else if (chosenResponse ==3) {
      opera.play();
  	}
  } 
  randoResponse();
  stopping = createButton("i wanna stop now");
  stopping.position(width/2, height/2+150);
  stopping.class("button");
	stopping.mousePressed(resent);
}

function resent() {
  stopping.hide();
  death.stop();
  shining.stop();
  mario.stop();
}

function draw() {
  background(255);
  vol = amp.getLevel();
  let diam = map(vol,0,0.2,10,60);
  for (i=0; i<NUM_FACE; i+=1) {
    ellipse(faceStuff.x[i]+10,faceStuff.y[i],diam,diam); //face
    ellipse(faceStuff.x[i]+10,faceStuff.y[i],diam-5,diam-40); //mouth
    let leftEye = map(mouseX,0,width,faceStuff.x[i],faceStuff.x[i]+8);
  	ellipse(leftEye,faceStuff.y[i]-10,4,4);
  	let rightEye = map(mouseX,0,width,faceStuff.x[i]+20,faceStuff.x[i]+28);
  	ellipse(rightEye,faceStuff.y[i]-10,4,4);
  }
  //bing();
}

function initialFaces() {
  for (i=0; i<NUM_FACE; i+=1) {
    faceStuff.x[i] = random(width);
    faceStuff.y[i] = random(height);
  }
}

// function bing() {
//   let lX = width/4;
//   let lY = height/4;
//   let vol = amp.getLevel();
//   noStroke();
//   let diam = map(vol,0,0.2,10,60);
//   fill(255,100,100); 
//   ellipse(lX+15,lY,diam,diam);
//   fill(0);
//   let leftEye = map(mouseX,0,width,lX,lX+8);
//   ellipse(leftEye,lY-10,4,4);
//   let rightEye = map(mouseX,0,width,lX+20,lX+28);
//   ellipse(rightEye,lY-10,4,4);
//   ellipse(lX+15,lY,diam-5,diam-40); //mouth
// }