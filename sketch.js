var diam1 = 50;
var r , g, b;

function setup(){
    createCanvas(500, 500);
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw(){
    background("pink"); 
    fill(r, g, b);
    stroke("mint");
    strokeWeight(5);
    ellipse(width/2, height/2, diam1, diam1);
    textSize(30);
    text("Press the circle", 100, 400);
    //ellipse(random(width), random(height), random(100), random(100));

}
function mousePressed(){
    diam1 = diam1 + random(50);
    r = random(255);
    g = random(255);
    b = random(255);
}