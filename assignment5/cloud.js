class cloud {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.SIZEX = 200;
    this.speedx = random(-2,2);
    this.transparency = random(150,255);
  }
  show() {
    noStroke();
    fill(255,this.transparency);
    ellipse(this.x,this.y,this.SIZEX,40);
    ellipse(this.x+40,this.y+10,this.SIZEX,40);
    ellipse(this.x-100,this.y+10,this.SIZEX,40);
  }
  update() {
    this.x = this.x + this.speedx;
    this.updateSpeed();
  }
  updateSpeed() {
    let radius = this.SIZEX/2;
    if (this.x < radius-100 || this.x > width-radius+100) {
      this.speedx = -this.speedx;
    }
  }
}