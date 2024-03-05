
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

    // dimensions
    side = 500;
    count = 0;

    // coordinates
    x = -side/2;
    y = -side/2;
    s = side
    // draw equilateral triangle from h & w
    square(x, y, s);

    // adjustable variables
    shrinkFactor = 97.5 // typically want to shrink in 80-99 range
    rotate = 4 // degrees

    // rotate while shrinking to produce effect
    while (count < 900) { // leave count alone for most part
        scale(shrinkFactor*.01)
        // rotate scale ~ 2.094 (dont ask why idk)
        rotateZ((rotate/360)/.477555)
        square(x, y, s);
        count = count+shrinkFactor*.1;
    }
//    save("sketch.png");
//    console.log('saved png')
   noLoop(); // we just want to export once
}