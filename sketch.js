
// declare xPos globally with a value of 25
let Xpos = 25
function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0)
  fill(0, 255, 0);
  ellipse(Xpos, 250, 50, 50)
  Xpos += 3

  if (Xpos > 525){
    Xpos = -25
  }
}