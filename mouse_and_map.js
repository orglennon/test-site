function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  var c1 = map(mouseX, 0, width, 0, 255);
  var c2 = map(mouseY, 0, height, 0, 255);
  stroke(c1, 178, c2);
  noFill();
  ellipse(mouseX, mouseY, 8, 8);
}
