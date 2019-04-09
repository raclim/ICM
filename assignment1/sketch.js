function setup() {
  createCanvas(400, 400);
	ellipseMode(CENTER);
	c1 = color(255,250,120); //yellow
	c2 = color(255,200,0); //orange
	c3 = random(c1,c2);
}

function draw() {
	background(255,160,160);
	strokeJoin(ROUND);
	
	//head
	noStroke();
	fill(c1);
	ellipse(200,104,90,90);
	
	//eyes
	noStroke();
	fill(255);
	ellipse(180,100,25,25); //left 
	ellipse(220,100,25,25); //right

	
	//pupils
	fill(220,100,120);
	ellipse(180,108,10,10); //left
	ellipse(220,108,10,10); //right
	
	//smile
	stroke(c2);
	strokeWeight(4);
	noFill();
	arc(200,105,50,50,QUARTER_PI,HALF_PI+QUARTER_PI);
	
	//eyelashes (left)
	stroke(255);
	strokeWeight(3);
	line(170,93,159,90); //top
	line(175,90,167,85); //bottom
	//eyelashes(right)
	line(230,94,236,90); //top
	line(233,98,241,95); //bottom
	
	//neck
	noStroke();
	fill(c1);
	rect(191,146,17,8);
	
	//antlers
	stroke(c1);
	strokeWeight(13);
	noFill();
	arc(170,57,40,40,HALF_PI,radians(180));//left
	arc(155,54,40,40,HALF_PI,radians(150));//left-below
	arc(235,57,40,40,radians(0),HALF_PI);//right
	arc(248,54,40,40,radians(30),HALF_PI);//right-below
	
	//body
	//referenced from p5 examples on linear gradient 
	//https://p5js.org/examples/color-linear-gradient.html
	for (var i = 158;i<=158+65;i++){
		var inter=map(i,190,190+60,0,1);
		var whoa = lerpColor(c1,c2,inter);
		stroke(whoa);
		line(188,i,188+25,i);
	}
	
	//arms
	stroke(c1);
	noFill();
	line(139,210,184,158); //left
	line(217,158,255,210); //right
	
	//legs
	stroke(lerpColor(c1,c2,0.5));
	line(188,230,188,300); //left
	line(213,230,213,300); //right
	
	//wings
	fill(c1);
	noStroke();
	arc(154,130,40,40,radians(60),radians(190));//left
	arc(163,145,30,30,radians(50),radians(180));//left-bottom
	arc(248,130,40,40,radians(350),radians(120));//right
	arc(239,145,30,30,radians(0),radians(130));//right-bottom
	
	
	//highlights
	noFill();
	stroke(255);
	strokeWeight(6);
	arc(200,115,90,90,radians(290),radians(305));
	
	fill(255);
	noStroke();
	ellipse(232,83,7,7); 
}