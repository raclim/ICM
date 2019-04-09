let newID, baseID, url, newURL, data, img, randomI, apiKey;
let testColors = {
  r: 0,
  g: 0,
  b: 255
};

let movies = ['tt0068646','tt0451279','tt0096283',
'tt0377092','tt0332280','tt0120737','tt0090756',
'tt5580390','tt0120338','tt1270797',
'tt0105695','tt1997445','tt0251504','tt1825683',
'tt5580390','tt2582802','tt0469494','tt0816692'
];

function preload() {
  url = 'https://www.omdbapi.com/?i='
  apiKey = '5a14bef7'
  //randomI = floor(random(100,999));
  baseID = 'tt3896198'; 
  //i = 'tt0317705'
  url += baseID +'&apikey='+ apiKey;
  print(url);
  loadJSON(url, gotData);
  // img = loadImage("test.png");
}

function search() {
  //randomI = floor(random(100,999));
  // newID = 'tt0317'+randomI; 
  let randomMovie = floor(random(movies.length));
  newID = movies[randomMovie];
  //i = 'tt0317705'
  newURL = 'https://www.omdbapi.com/?i=';
  newURL += newID +'&apikey='+ apiKey;
  print(newURL);
  loadJSON(newURL,gotData);
}

function gotData(data) {
  console.log("data", data.Poster);
  console.log(data.Title);
  if (data.Poster != "N/A") {
  	img = loadImage(data.Poster);
  }
  else {
    img = loadImage("test.png");
  }
}

function setup() {
  createCanvas(400,400, WEBGL);
  let newMovie = createButton("new");
  newMovie.position(windowWidth/2, windowHeight/2+80);
  newMovie.mousePressed(search);
  newMovie.class('button');
  
  let title = createP('');
  title.html('THE ITP TIMES');
  title.position(windowWidth/5,windowHeight/5);
  title.class('title');
}

function draw() {
  background(220);
  shape();
}

function lighting(){
  let loc = {
  x: mouseX - height/2,
  y: mouseY - width/2
	};
  ambientLight(100,100,100);
  directionalLight(166, 214, 244,-loc.x,200,0);
  pointLight(255,200,200,loc.x,loc.y,250);
}
function shape() {
    noStroke();
  	lighting();
  	//fill(testColors.r,testColors.g,testColors.b);
  	texture(img);
  	push(); 
  	rotateZ(frameCount * 0.01);
  	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
  	//specularMaterial(255);
  	box(200,200,200);
		pop();
}