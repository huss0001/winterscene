//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let currentPalette;
function preload() {
  cabinWallSE = loadImage("images/cabinWall_SE.png");
  cabinSideCenterSW = loadImage("images/cabinSideCenter_SW.png");
  cabinDoor = loadImage("images/cabinDoor_SW.png");
  cabinRoofCenter = loadImage("images/cabinRoofCenter_NE.png");
  wreath = loadImage("images/wreath_NE.png");
  lightsNW = loadImage("images/lightsMulti_NW.png");
  snowmanHat = loadImage("images/frostybgg.png");
	snowmanScarf = loadImage("images/scarf6.png")
	snowmanNose = loadImage("images/carrot2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight / 2);
  currentPalette = randomPalette();
  noStroke();
  background(0);
  noLoop();
}

function draw() {
  drawTrees(100, 310);
  drawTrees(150, 300);
  drawTrees(50, 300);
  drawCabin(300, 50);
  drawSnowman(100, 70);
  drawSnowman(900, 70);
}

function mousePressed() {
  background(0);
  redraw();
}

function drawTrees(x, y) {
  push();
  translate(x, y);
  fill("saddlebrown");
  rectMode(CENTER);
  rect(0, 0, 10, 20);
  fill("darkgreen");
  let treeSize = random(-30, -20);
  drawTreeSection(treeSize);
  translate(0, -10);
  drawTreeSection(treeSize + 5);
  translate(0, -10);
  drawTreeSection(treeSize + 10);
  pop();
}

function drawTreeSection(x) {
  beginShape();
  vertex(0, x);
  vertex(x, 0);
  vertex(x * -1, 0);
  endShape(CLOSE);
}

function drawCabin(x, y) {
  push();
  translate(x, y);
  image(cabinWallSE, 130, -30);
  image(cabinWallSE, 65, 2);
  image(cabinDoor, 0, 0);
  image(cabinRoofCenter, 90, -115);
  image(cabinRoofCenter, 40, -90);
  cabinSideCenterSW.resize(425, 0);
  image(cabinSideCenterSW, 45, -25);
  wreath.resize(300, 0);
  image(wreath, 105, 60);
  image(lightsNW, 70, -45);
  image(lightsNW, 135, -75);
  pop();
}


function drawSnowman(x, y) {
	
	translate (x, y);
  scale(0.5);
	fill(255);
	noStroke();
	circle (x, y +200, 180);
	circle (x, y +100, 140); 
	circle (x, y, 100); 
	
	noStroke();
	fill(0);
	circle(x, y +140, 10);
	circle(x, y +120, 10);
	circle(x, y +100, 10); 
	
	stroke(150, 75, 0);
	strokeWeight(5);
	line(x + 50, y + 100, x + 110, y + 40);
	line(x + 110, y + 40, x + 128, y + 60);
	line(x + 110, y + 40, x + 128, y + 10);
	line(x - 50, y + 100, x - 115, y + 50);
	line(x - 115, y + 50, x - 150, y + 40);
	line(x - 115, y + 50, x - 150, y + 80);
	
	stroke(255);
	strokeWeight(5);
	circle(x - 15, y - 10, 15); 
	circle(x + 15, y -10, 15);
	
	noStroke();
	circle(x + 10, y + 27, 6); 
	circle(x + 25, y + 20, 6);
	circle(x - 5, y + 25, 6);
	
	image(snowmanHat, x - 80, y - 140);
	image(snowmanScarf, x - 120, y + 10);
	image(snowmanNose,x - 65, y - 30);



}
