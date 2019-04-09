class stars {
  constructor(x,y) {
    this.x = x;
    this.y = y;

    this.size = random(2,7);
    
    this.weight = random(1,3);
    this.finalWeight = 0;
  }
  show() {
    stroke(100);
    this.twinkle();
    fill(255);
    ellipse(this.x,this.y,this.size,this.size);
  }
  twinkle() {
    this.finalWeight = this.finalWeight + this.weight*0.1;
    strokeWeight(this.finalWeight);
    this.updateTwinkle();
  }
  updateTwinkle() {
    let stopShining = 5;
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