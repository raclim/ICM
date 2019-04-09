class Face {
  constructor() {
    this.speedL = 0.5;
    this.speedR = 0.5;
    this.hairHeightL = 155;
    this.hairHeightR = 195;
  }
  show() {
    fill(255,200,200);
    noStroke();
    triangle(200,150, 125,175, 275,175); //hair pigtails
    ellipse(200,135,110,100); //hair
    fill(255);
    ellipse(200,150,100,100); //head
    fill(0);
    leftEye = map(mouseX,0,400,173,177);
    ellipse(leftEye,150,7,7); //left eye
    rightEye = map(mouseX,0,400,223,227);
    ellipse(rightEye,150,7,7); //right eye
    fill(255,200,200);
    noStroke();
    //hair 
    arc(200,130,100,80,radians(270),radians(320));
    //body
    fill(200);
    rect(150,200,100,100);
    fill(255);
    ellipse(200,230,50,50);
  }
  
  neutral(){
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(175,157,20,20,radians(215),radians(320)); //left lid
    arc(225,157,20,20,radians(215),radians(320)); //right lid
    strokeWeight(1);
    arc(175,145,20,20,radians(235),radians(300)); //left brow
    arc(225,145,20,20,radians(235),radians(300)); //right brow

    //mouth
    stroke(191,110,113);
    strokeWeight(3);
    arc(200,175,8,6,radians(200),radians(320)); //upper lip
    arc(200,174,8,6,radians(50),radians(140)); //lower lip

    //blush
    fill(255,200,200);
    noStroke();
    ellipse(175,165,10,10); //left blush
    ellipse(225,165,10,10); //right blush
  }
  
  happy(){
    //behindhair 
    fill('#ffeecc');
    noStroke();
    rect(100,153,200,200);
    //hair
    fill(255,200,200);
    this.hairHeightL +=this.speedL;
    this.hairHeightR +=this.speedR;
    if (this.hairHeightL < 155 || this.hairHeightL > 195) {
			this.speedL = -this.speedL;
      }
    if (this.hairHeightR < 155 || this.hairHeightL >195) {
			this.speedR = -this.speedR;
      }
    fill(255,200,200);
    noStroke();
    triangle(200,150, 125,this.hairHeightL, 275,this.hairHeightR);
    //triangle(200,150, 125,175, 275,175); //hair pigtails
    fill(255);
  	noStroke();
  	ellipse(200,150,100,100); //head
    fill(255);
    ellipse(200,150,100,100); //head
    fill(0);
    leftEye = map(mouseX,0,400,173,177);
    ellipse(leftEye,150,10,10); //left eye
    rightEye = map(mouseX,0,400,223,227);
    ellipse(rightEye,150,10,10); //right eye
    fill(255);
    ellipse(leftEye-2,150,5,5); //shine
    ellipse(rightEye-2,150,5,5);//shine
    fill(255,200,200);
    noStroke();
  	//hair 
  	arc(200,130,100,80,radians(270),radians(320));
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(175,156,20,20,radians(215),radians(320)); //left lid
    arc(225,156,20,20,radians(215),radians(320)); //right lid
    strokeWeight(1);
    arc(175,145,20,20,radians(235),radians(265)); //left brow
    arc(225,145,20,20,radians(275),radians(300)); //right brow

    //mouth
    stroke(191,110,113);
    strokeWeight(3);
    line(190,175,210,175); //upper lip

    //blush
    fill(255,200,200);
    noStroke();
    ellipse(175,165,20,20); //left blush
    ellipse(225,165,20,20); //right blush
    fill(255,0,0,150);
    ellipse(175,165,15,15); //left blush
    ellipse(225,165,15,15); //right blush
    
    //body
    fill(200);
    rect(150,200,100,100);
    fill(255);
    ellipse(200,230,50,50);
  }
  
  hate(){
    fill(255);
  	noStroke();
  	ellipse(200,150,100,100); //head
    fill(255,200,200);
    //hair 
  	arc(200,130,100,80,radians(270),radians(320));
  }
  
  sad() {
    //behindhair 
    fill('#ffeecc');
    noStroke();
    rect(75,153,200,200);
    fill(255);
  	noStroke();
  	ellipse(200,150,100,100); //head
    fill(255);
    ellipse(200,150,100,100); //head
    fill(0);
    leftEye = map(mouseX,0,400,173,177);
    ellipse(leftEye,150,7,7); //left eye
    rightEye = map(mouseX,0,400,223,227);
    ellipse(rightEye,150,7,7); //right eye
    fill(255,200,200);
    noStroke();
  	//hair 
  	arc(200,130,100,80,radians(270),radians(320));
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(175,157,20,20,radians(215),radians(320)); //left lid
    arc(225,157,20,20,radians(215),radians(320)); //right lid
    strokeWeight(1);
    arc(175,145,20,20,radians(235),radians(340)); //left brow
    arc(225,145,20,20,radians(195),radians(300)); //right brow

    //mouth
    stroke(191,110,113);
    strokeWeight(3);
    arc(200,175,22,20,radians(200),radians(340)); //upper lip

    //blush
    fill(255,200,200);
    noStroke();
    ellipse(175,165,10,10); //left blush
    ellipse(225,165,10,10); //right blush
    //hair 
  	arc(200,130,100,80,radians(270),radians(320));
  }
  upset() {
    fill(255);
  	noStroke();
  	ellipse(300,150,120,100); //head -right
    ellipse(100,150,120,100); //head -left
    ellipse(200,150,100,100); //head -middle
    fill(0);
    leftEye = map(mouseX,0,400,173,177);
    ellipse(leftEye,150,7,7); //left eye
    rightEye = map(mouseX,0,400,223,227);
    ellipse(rightEye,150,7,7); //right eye
    fill(255,200,200);
    noStroke();
  	//hair 
  	arc(200,130,100,80,radians(270),radians(320));
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(175,157,20,20,radians(215),radians(320)); //left lid
    arc(225,157,20,20,radians(215),radians(320)); //right lid
    strokeWeight(1);
    arc(175,145,20,20,radians(235),radians(340)); //left brow
    arc(225,145,20,20,radians(195),radians(300)); //right brow
    
    //mouth
    noFill();
    stroke(191,110,113);
    strokeWeight(3);
    arc(200,175+random(-5,5),22,20,radians(200),radians(340)); //upper lip
    
    //right face
    noStroke();
    fill(0);
    RleftEye = map(mouseX,0,400,283,287);
    ellipse(RleftEye,150,7,7); //left eye
    RrightEye = map(mouseX,0,400,323,327);
    ellipse(RrightEye,150,7,7); //right eye
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(285,157,20,20,radians(215),radians(320)); //left lid
    arc(325,157,20,20,radians(215),radians(320)); //right lid
    strokeWeight(1);
    arc(285,145,20,20,radians(235),radians(340)); //left brow
    arc(325,145,20,20,radians(195),radians(300)); //right brow
    //mouth
    noFill();
    stroke(191,110,113);
    strokeWeight(3);
    arc(300,175+random(-5,5),22,20,radians(200),radians(340)); //upper
    
    //left face
    noStroke();
    fill(0);
    RleftEye = map(mouseX,0,400,83,87);
    ellipse(RleftEye,150,7,7); //left eye
    RrightEye = map(mouseX,0,400,123,127);
    ellipse(RrightEye,150,7,7); //right eye
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(85,157,20,20,radians(215),radians(320)); //left lid
    arc(125,157,20,20,radians(215),radians(320)); //right lid
    strokeWeight(1);
    arc(85,145,20,20,radians(235),radians(340)); //left brow
    arc(125,145,20,20,radians(195),radians(300)); //right brow
    //mouth
    noFill();
    stroke(191,110,113);
    strokeWeight(3);
    arc(100,175+random(-5,5),22,20,radians(200),radians(340)); //upper
  }
}