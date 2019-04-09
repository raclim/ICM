class moon {

  constructor() {
    this.width = width/4;
    this.height = height/4;
    this.circleSize = 100;
  }
  show() {
    noStroke();
    fill(255, 246, 183);
    ellipse(this.width, this.height, this.circleSize, this.circleSIze);
    fill(200);
    ellipse(this.width - 30, this.height - 30, 10, 10);
    ellipse(this.width + 20, this.height + 20, 10, 30);
    ellipse(this.width - 20, this.height - 20, 10, 20);
  }

  rolled() {
    let d = dist(mouseX, mouseY, this.width, this.height);
    if (d<50 && d>40) {
      this.circleSize = 100;
    }
    else if (d<40 && d>30) {
      this.circleSize = 80;
    }
    else if (d<30 && d>20) {
      this.circleSize = 60;
    }
    else if(d<20) {
      this.cake();
    }
    else {
      this.circleSize = 130;
    }
  }

  cake() {
  	let o, m, g;
  	let x = this.width - 20;
    let y = this.height - 15;
		
    fill(0);
		ellipse(width/4, height/4, 131,131);
    //last layer
    fill(252, 228, 196);
    for (o = 0; o < 10; o++) {
      triangle(x, y + 15 + o, x + 50, y + 15 + o, x + 9, y + 15 + 15 + o);
    }
    //middle layer
    fill(255);
    for (m = 0; m < 5; m++) {
      triangle(x, y + 10 + m, x + 50, y + 10 + m, x + 9, y + 15 + 10 + m);
    }
    //first layer
    fill(252, 228, 196);
    for (g = 0; g < 10; g++) {
      triangle(x, y + g, x + 50, y + g, x + 9, y + 15 + g);
    }
    //top
    fill(255);
    triangle(x, y, x + 50, y, x + 9, y + 15);
    //strawberry
    fill(255, 0, 0);
    ellipse(x + 15, y + 3, 12, 16);
    //strawberry-tip
    noStroke();
    fill(0, 255, 0);
    rect(x + 15, y - 5, 1.5, 5);
    //rect(x+12,y-5,1.5,5);
    //frosting
    fill(238);
    ellipse(x + 4, y - 1, 12, 12);
    fill(247);
    ellipse(x + 7, y + 3, 12, 12);
    fill(255);
    ellipse(x + 10, y + 8, 12, 12);
  }
}