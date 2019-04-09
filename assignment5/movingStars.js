class movingStars {
  constructor(xAdd,yAdd) {
    this.xAdd = xAdd;
    this.yAdd = yAdd;
    this.hax = mouseX + xAdd;
    this.hay = mouseY;
    this.size = random(0.5,1.5);
    
    this.weight = random(2);
    this.finalWeight = 0;
  }
  show() {
    stroke(100);
    this.twinkle();
    fill(255);
    this.boundaries();
  }
  boundaries() {
    if (mouseX <= 50) {
      ellipse(this.hax,mouseY + this.yAdd,this.size,this.size);
    } 
    else if (mouseX >= 500) {
      ellipse(width-this.hax,mouseY + this.yAdd,this.size,this.size);
    }
    else {
      ellipse(mouseX + this.xAdd,mouseY + this.yAdd,this.size,this.size);
    }
  }
  twinkle() {
    this.finalWeight = this.finalWeight + this.weight*0.1;
    strokeWeight(this.finalWeight);
    this.updateTwinkle();
  }
  updateTwinkle() {
    let stopShining = 7;
    if (this.finalWeight > stopShining || this.finalWeight <= 0) {
      this.weight = -this.weight;
    }
  }
}

//star objects - class tiny 
//twinkling - transparency 
//follows around mouse 

//functions (rollover, mousePressed, scatter)
//maybe after 10 seconds they spell out a message 