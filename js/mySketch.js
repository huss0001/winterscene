//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let currentPalette;
function preload() {
  cabinWallSE = loadImage("images/cabinWall_SE.png");
  cabinSideCenterSW = loadImage("images/cabinSideCenter_SW.png");
  cabinDoor = loadImage("images/cabinDoor_SW.png");
  cabinRoofCenter = loadImage("images/cabinRoofCenter_NE.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight / 2);
  currentPalette = randomPalette();
  noStroke();
  background("black");
  noLoop();
}

function draw() {
  drawTrees(100, 310);
  drawTrees(150, 300);
  drawTrees(50, 300);
  drawCabin(300, 50);
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
  pop();
}
