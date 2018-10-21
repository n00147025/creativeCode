function setup() {

    createCanvas(500,500);
    colorMode(HSB, width, height, 100);   //Sets the colour mode to HSB and the HUE and Saturation to be the same value as the width and height of the canvas
    //rectMode(CENTER);
    noStroke();

}

function draw() {

    var numberOfCols = 5;           //hard coded variables to determine the amount of Cols and rows it will draw
    var numberOfRows = 5;
    var stepX = width/numberOfCols; //these variables will be used later in a for loop to create and populate the canvas with squares
    var stepY = width/numberOfRows;

    fill(500,500,500);              //fills the rect with a red colour
    rect(0, 0, 100, 100);           //creates a square from x & y position 0, 0 with a width and height of 100



}

function keyPressed() {

    if (key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX'+mouseX + ' ' +'_MouseY'+mouseY,'png');

}
