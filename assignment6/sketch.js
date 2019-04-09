let mainFace, mainFraming;
let c,title,prompt,affirm,hate,whatever,rage;
let button1, button2,buttonBack, buttonRegret,restart;
let leftEye, rightEye;
let RleftEye, RrightEye;
let startX,startY;
let bing = {
  hate: false,
  sad: false,
  rage:false,
  happy:false
}

function setup() {
  canvas = createCanvas(400,400,CENTER);
  canvas.position(windowWidth/2-200,windowHeight/2-250);
  background('#ffeecc');
  
  startX =windowWidth/2-90;
  startY = 0;
  
  //static objects
  mainFace = new Face();
  mainFraming = new Frame();
  mainFraming.show();
  
  //html elements
  title = createElement('h1',"I LOVE YOU");
  title.position(windowWidth/2-90,0);
  title.class("love");

  prompt = createP("ARE WE FRIENDS?");
  prompt.position(windowWidth/2-60,windowHeight/5);
  prompt.class("text");
  
  button1 = createButton("LIGHT OF MY LIFE");
  button1.position(windowWidth/2-100,windowHeight/2+100);
  button1.class("button");
  button1.mousePressed(yeah);
  
  button2 = createButton("NAW");
  button2.position(windowWidth/2+50,windowHeight/2+100);
  button2.class("button");
  button2.mousePressed(naw);
  
}

function draw() {
  mainFace.show();
  mainFace.neutral();
  
  if(bing.hate == true){
  	title.position(startX,startY);
    startX += random(-5,5);
    startY += random(-5,5);
    mainFace.hate();
  }
  if(bing.happy == true){
  	mainFace.happy();
    startX += random(-20,20);
    startY += random(-20,20);
  }
  if(bing.sad == true){
  	mainFace.sad();
  }
  if(bing.rage == true){
  	mainFace.upset();
    startX += random(-20,20);
    startY += random(-20,20);
  }
}

function yeah(){
  prompt.hide();
  button1.hide();
  button2.hide();
  affirm = createP("I'M SO HAPPY...DO YOU WANT FLOWERS?");
  affirm.position(windowWidth/3+100,windowHeight/5);
  affirm.class("text");
  doBetter();
  bing.happy = true;
}
function naw(){
  prompt.hide();
  button1.hide();
  button2.hide();
  hate = createP("I HATE YOU");
  hate.position(windowWidth/2-40,windowHeight/5);
  hate.class("text");
  takeMeBack();
  bing.hate = true;
}

function doBetter() {
  buttonRegret = createButton("NEVERMIND");
  buttonRegret.position(windowWidth/2-40,windowHeight/2+100);
  buttonRegret.class("button");
  buttonRegret.mousePressed(takeBack);
}

function takeMeBack() {
  buttonBack = createButton("TAKE IT BACK");
  buttonBack.position(windowWidth/2-40,windowHeight/2+100);
  buttonBack.class("button");
  buttonBack.mousePressed(back);
}

function takeBack() {
  button1.hide();
  button2.hide();
  buttonRegret.hide();
  prompt.hide();
  affirm.hide();
  whatever = createP("I'M BETTER THAN YOU");
  whatever.position(windowWidth/2-40,windowHeight/2);
  whatever.class("text");
  bing.sad = true;
}

function back() {
  button1.hide();
  button2.hide();
  buttonBack.hide();
  prompt.hide();
  hate.hide();
  rage = createP("I WILL MEAT YOU");
  rage.position(windowWidth/2-40,windowHeight/2);
  rage.class("text");
  bing.rage = true;
}
