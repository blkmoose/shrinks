
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
    width = 500
    height = Math.sqrt((width*width) - ((.5*width)*(.5*width)))
    count = 0;

    // coordinates
    x1 = -width/2;
    y1 = -height/3;
    x2 = 0;
    y2 = 2*(height/3);
    x3 = width/2;
    y3 = -height/3;

    // draw equilateral triangle from h & w
    triangle(x1,y1,x2,y2,x3,y3);

    // adjustable variables
    shrinkFactor = 84 // typically want to shrink in 80-99 range
    rotate = 10 // degrees

    // rotate while shrinking to produce effect
    while (count < 270) { // leave count alone for most part
        scale(shrinkFactor*.01)
        // rotate scale ~ 2.094 (dont ask why idk)
        rotateZ((rotate/360)/.477555)
        triangle(x1,y1,x2,y2,x3,y3);
        count = count+shrinkFactor*.1;
    }
//    save("sketch.png");
//    console.log('saved png')
   noLoop(); // we just want to export once
}