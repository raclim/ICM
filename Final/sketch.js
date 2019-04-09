let spr1a,spr1b, spr1c, spr2a, spr2b, spr3a, spr4a, spr5a;

let face;
let catMapA, catMapB, catMapC,catMap1, catMapItems1;
let clothesMap, bedroomMap;
let treeMap, treeButton, clotheButton, yesButton, noButton;
let sorryButton, notSorryButton;
let hideClotheButton, hideTreeButton;
let pet, bed, jewelry, jewels, ding;
let bone, fish, dog, clothe1, clothe2, basket;
let ball, w, bing;
let goodEnd, badEnd;
let score = "this is a pet"; 
let score2 = "guide it towards its fav toy";
let score3 = " ";

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textFont("Courier");
  textSize(13);
  textAlign(CENTER, CENTER);
  
  ding= false;
  goodEnd = false;
  badEnd = false;
  hideTreeButton = false;
  hideClotheButton = false;
  catMapItems1 = new Group();
  jewelry = new Group();
  
  //floatin sprites
  for (let i=0; i<9; i+=1) {
    w = createSprite(random(width/5,width*3/5),random(height/5,height*4/5));
    w.addAnimation('huh','catMap1.png');
    catMapItems1.add(w);
  }
  
  //map
  catMapA = createSprite(width*2/5,height*2/5);
  catMapA.addAnimation('huh','catMap.png');
  catMapB = createSprite(width*4/5,height*4/5);
  catMapB.addAnimation('huh','catMap.png');
  
  //face
  face = createSprite(0, 0, 50, 50);
  face.addAnimation('there','facesmall.png');
  
  //dog
  dog = createSprite(width*1.5/8+140, height/3-100, 70, 70);
  dog.addAnimation('dog','doggy1.png','doggy2.png','doggy3.png');
  
  //bone
  bone = createSprite(width*2/5-100,height*4/5);
  bone.addAnimation('bone', 'bone.png');
  bone.onMouseOver = function() {
    this.scale =2;
  }
  bone.onMouseOut = function() {
    this.scale =1;
  }
  //fish
  fish = createSprite(width*3/5,height*2/5);
  fish.addAnimation('fish', 'fishy.png');
  fish.onMouseOver = function() {
    this.scale =2;
  }
  fish.onMouseOut = function() {
    this.scale =1;
  }
  
  //trees
  spr1a = createSprite(width*2.8/8+random(-200,100), height/6+random(-100,200), 10, 10);
  spr1b = createSprite(width*2.8/8+random(-200,100), height/6+random(-100,200), 10, 10);
  spr2a = createSprite(width*2.8/8+150, height/6-20, 10, 10);
  spr3a = createSprite(width*2.8/8+random(-200,380), height/6+random(-100,350), 10, 10);
  spr4a = createSprite(width*2.8/8+250, height/6+15, 10, 10);
  
  //clothes
  clothe2 = createSprite(width*3/5,height*4/5, 10,10);
  clothe2.shapeColor = color(0);
  
  //basket
  basket = createSprite(width*1/5+40,height*4/5, 10, 10);
  //bed
  bed = createSprite(width*1.5/8, height*9/10, 10, 10);
}

function draw() {
  background(250);
  //terminal rectangle
  stroke(0);
  fill(255);
  rect(width/2+450,height/10+170,375,325);
  //top
  rect(width/2+450,height/10,375,20);
  //corner buttons
  ellipse(width/2-25+300,height/10,10,10);
  ellipse(width/2-10+300,height/10,10,10);
  ellipse(width/2+5+300,height/10,10,10);
  
  //text
  textAlign(RIGHT);
  drawWords(width*3/5+310);
  drawChange(width*4/5+180);
  drawChange2(width*4/5+180);
  drawChange3(width*4/5+180);
  fill(0,150);
  textSize(13);
  text("c0mpooter -bash-- 80x24", width*3/4-120+300, height/10);
  
  //face speed
  face.velocity.x = (mouseX-face.position.x)*0.1;
  face.velocity.y = (mouseY-face.position.y)*0.1;
  
  //catMapItems 
  for (let i=0; i<catMapItems1.length;i+=1) {
    catMapItems1[i].position.x += 1;
    if (catMapItems1[i].position.x > width*3/5) {
      catMapItems1[i].position.x = 0;
    }
  }
  
  //collision detection
  face.displace(dog,notify);
  face.displace(catMapItems1);
  face.displace(jewelry);
  face.displace(clothe2);
  face.displace(spr1a, tree1Change);
  face.displace(spr1b, tree1BChange);
  face.displace(spr2a, tree2Change);
  face.displace(spr3a, tree3Change);
  face.displace(spr4a, tree4Change);
  dog.overlap(fish,omgCat);
  dog.overlap(bone,omgDog);
  clothe2.overlap(basket,cleanLaundry);
  
  if (ding == true) {
  	for (let u=0; u<jewelry.length;u+=1) {
      jewelry[u].rotation +=4;
    	jewelry[u].position.x += 1;
    	if (jewelry[u].position.x > width*3/5) {
      	jewelry[u].position.x = 0;
    	}
  	}
    pet.velocity.x = (mouseX-pet.position.x)*0.04;
    pet.velocity.y = (mouseY-pet.position.y)*0.04;
    yesButton.hide();
    noButton.hide();
  }
  
  if (goodEnd == true) {
    background(255);
    fill(0);
    textSize(15);
    text('it alright, hope u meant it',width/2,height/2);
    sorryButton.hide();
    notSorryButton.hide();
  }
  if (badEnd == true) {
    background(0);
    fill(255);
    textSize(15);
    text('bye',width/2,height/2);
    sorryButton.hide();
    notSorryButton.hide();
  }
	if (hideTreeButton === true) {
    treeButton.hide();
  }
  if (hideClotheButton === true) {
    clotheButton.hide();
  }
  drawSprites();
}

function drawWords(x) {
  fill(0);
  text("c0mpooter:~ c0mpooter$ ", x, height/10+24);
}

function drawChange(x) {
  fill(0);
  textSize(18);
  text(score, x, height/10+90);
}

function drawChange2(x) {
  fill(0);
  textSize(18);
  text(score2, x, height/10+110);
}

function drawChange3(x) {
  fill(0);
  textSize(18);
  text(score3, x, height/10+130);
}

function notify() {
  if (face.position.x -dog.position.x < 50) {
    print("yes");
    dog.changeAnimation('dog','dog2.png');
  }
}

function omgDog() {
  fish.remove();
  score = "omg its a DOG";
  score2 = "CLICK on the BONE";
  score3 = "to see the TREES";
  bone.onMousePressed = function () {
    trigger();
  }
}

function omgCat() {
  score = "haha its not a cat";
  score2 = "stupid";
  score3 = " ";
}

function trigger() {
  treeButton = createButton("let's go");
  treeButton.position(width*4/5+70, height/10+170);
  treeButton.class("button");
  treeButton.mousePressed(getRidDog);
}

function tree1Change() {
  if (hideTreeButton == true && hideClotheButton == false) {
  	score = "wonderful";
  	score2 = " ";
  	score3 = " ";
  }
}
function tree1BChange() {
  if (hideTreeButton == true && hideClotheButton == false) {
  	score = "absolutely lovely";
  	score2 = "  ";
  	score3 = " ";
  }
}
function tree2Change() {
  if (hideTreeButton == true && hideClotheButton == false) {
  	score = "u rly know wat ur doing";
  	score2 = " ";
  	score3 = " ";
  }
}
function tree3Change() {
  if (hideTreeButton == true && hideClotheButton == false) {
  score = "doing great";
  score2 = " ";
  score3 = " ";
  }
}
function tree4Change() {
  if (hideTreeButton == true && hideClotheButton == false) {
  score = "keep going";
  score2 = " ";
  score3 = " ";
  }
}

function getRidDog() {
  	catMapA.remove();
    catMapB.remove();
    bone.remove();
    fish.remove();
    dog.position.x =width/8;
    dog.position.y =height/8;
    dog.remove();
  	hideTreeButton = true;
  
  	//change words
  	score = "made you a GARDEN";
    score2 = "feel free to MOVE them around";
  	score3 = " ";
   
    //treemap
    treeMap = createSprite(width/5+100,height*2/5+100);
    treeMap.addAnimation('huh','treeeMap.png');
  	//trees
  	spr1a.addAnimation('floating','forwarda.png','backwarda.png');
  	spr1b.addAnimation('floating','forwarda.png','backwarda.png');
    spr2a.addAnimation('floating','flowerpot.png');
    spr3a.addAnimation('floating','ctree.png');
    spr4a.addAnimation('floating','grapetree.png');
  
  	clothe1 = createSprite(width*1/5, height*9/10);
  	clothe1.addAnimation('clothe','clothe1.png');
    
    clothe1.onMouseOver = function() {
      score = "omg this is my LAUNDRY";
      score2 = "this DOESN'T belong here";
      score3 = " ";
    }
    clothe1.onMouseOut = function() {
      score = "u going back to the trees?";
      score2 = " ";
      score3 = " ";
    }
    
    clothe1.onMousePressed = function() {
    	score = "wanna HELP ME put this back";
  		score2 = " ";
  		clotheButton = createButton("let's go put it back");
  		clotheButton.position(width*4/5+30, height/10+170);
      clotheButton.class("button");
  		clotheButton.mousePressed(hangClothes);
    }
}

function hangClothes() {
  treeMap.remove();
  clothe1.remove();
  spr1a.remove();
  spr1b.remove();
  spr2a.remove();
  spr3a.remove();
  spr4a.remove();
  hideClotheButton = true;
  score = "this place is peaceful";
  score2 = "wanna put my clothes back?";
  score3 = " ";
  clothe2.addAnimation('huh','clothe2.png');
  basket.addAnimation('huh','basket.png');
  basket.onMouseOver = function() {
    this.scale =2;
    score = "this my laundry basket";
  	score2 = " ";
  	score3 = " ";
    
  }
  basket.onMouseOut = function() {
    this.scale =1;
    score = "i lik spending private time here";
  	score2 = " ";
  	score3 = " ";
  }
  clothesMap = createSprite(width*2/5,height*2/5+100);
  clothesMap.addAnimation('map','clothesMap.png');
  ball = createSprite(width*3/5,height*4/5+80);
  ball.addAnimation('ball','bally.png');
  ball.onMouseOver = function() {
    score = "not this way pls";
  	score2 = "this is personal";
  }
  ball.onMouseOut = function() {
    score = "yas";
  	score2 = "go yonder";
  }
  ball.onMousePressed = function() {
    score = "u're persistent";
  	score2 = "u rly want to?";
    yesButton = createButton("i do");
  	yesButton.position(width*4/5+10, height/10+170);
    yesButton.class("button");
  	yesButton.mousePressed(yas);
    noButton = createButton("nevermind");
  	noButton.position(width*4/5+70, height/10+170);
    noButton.class("button");
  	noButton.mousePressed(no);
  }
}

function cleanLaundry() {
  score = "omg thx!";
  score2 = "ur amazing";
  clothe2.remove();
}

function yas() {
  clothesMap.remove();
  basket.remove();
  ball.remove();
  bedroomMap = createSprite(width*2/5,height*2/5+100);
  bedroomMap.addAnimation('map','bedroomMap.png');
  bed.addAnimation('bed','bed.png');
  bed.onMouseOver = function() {
    this.scale = 2;
    score = "i need time to rest";
  	score2 = "we do a lot too";
    score3 = " ";
  }
  bed.onMouseOut = function() {
    this.scale = 1;
    score = "i like glitzing up the place";
  	score2 = "feels more alive";
    score3 = " "
  }
  bed.onMousePressed = function() {
    bed.remove();
    bedroomMap.remove();
    pet.remove();
    clothe2.remove();
    score = "stop";
  	score2 = "u rly like to pry";
    score3 = " "
    sorryButton = createButton("sorry");
  	sorryButton.position(width*4/5+10, height/10+170);
    sorryButton.class("button");
  	sorryButton.mousePressed(sorry);
    notSorryButton = createButton("so what");
  	notSorryButton.position(width*4/5+70, height/10+170);
    notSorryButton.class("button");
  	notSorryButton.mousePressed(notSorry);
  }
  pet = createSprite(width*2/5,height*1/6);
  pet.addAnimation('dog','doggy2.png','doggy3.png');
  score = "alright";
  score2 = "since u didn't ASK for it";
  score3 = "this is 'my room'";
  for (let u=0; u<9; u+=1) {
    	jewels = createSprite(random(width/5,width*3/5),random(height/5,height*4/5), 10,10);
    	jewelry.add(jewels);
  	}
  ding = true;
  
}

function no() {
  score = "thx for the respect man";
  score2 = "rly appreciate it";
}

function sorry() {
  goodEnd = true;
}

function notSorry(){
  face.remove();
  badEnd = true;
}