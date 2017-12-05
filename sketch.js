var n = 0;
var c = 3;

var points = [];

var start = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(HSB);

    // ** create slider to allow user to change hue values
    // **uncomment out to allow you to change hues with sliders.
    // rSlider = createSlider(0,255,100);
    // rSlider.position(20,20);
    // gSlider = createSlider(0,255,0);
    // gSlider.position(20,50);
    // bSlider = createSlider(0,255,255);
    // bSlider.position(20,80);  

    // angle slider - change look of the Phyllotaxis pattern
    aSlider = createSlider(0,200, 137.5, .25);
    aSlider.position(20,10);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    rotate(n * 0.1);
    for (var i = 0; i < n; i++) {
        // var red = rSlider.value(); uncomment for rgb sliders
        // var green = gSlider.value();
        // var blue = bSlider.value();
        var angle = aSlider.value();
        var a = i * angle;
        var r = c * sqrt(i);
        var x = r * cos(a);
        var y = r * sin(a);
        // ** Daniel Shiffman Coloring
        var hu = sin(start + i * 0.5); 
        hu = map(hu, -1, 1, 0, 360);
        fill(hu, 255, 255);

        // fill(red,green,blue); uncomment for rgb sliders
        noStroke();
        ellipse(x, y, 4, 4);
    }
    n += 5;
    start += 5;
}