
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 1000, WEBGL);
  centerCanvas();
  background(0, 0, 0);
}

function windowResized() {
  centerCanvas();
}

function draw() {
    // init
    noFill();
    smooth();
    stroke(255,255,255);
    strokeWeight(2);

    // dimensions
    side = 250;
    count = 0;

    // coordinates
    x = 0;
    y = 0;
    s = side
    // draw equilateral triangle from h & w
    polygon(x, y, s, 6);

    // adjustable variables
    shrinkFactor = 88 // typically want to shrink in 80-99 range
    rotate = 60 // degrees

    // rotate while shrinking to produce effect
    while (count < 270) { // leave count alone for most part
        scale(shrinkFactor*.01);
        // rotate scale ~ 2.094 (dont ask why idk)
        rotateZ((rotate/360)/.477555);
        polygon(x, y, s, 6);
        count = count+shrinkFactor*.1;
    }
//    save("sketch.png");
//    console.log('saved png')
   noLoop(); // we just want to export once
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}