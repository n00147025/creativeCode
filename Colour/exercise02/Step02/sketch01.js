function setup() {

    createCanvas(500,500);
    colorMode(HSB, width, height, 100);
    //rectMode(CENTER);
    noStroke();

}

function draw() {
                                        
    var numberOfCols = 5;
    var numberOfRows = 5;
    var stepX = width/numberOfCols;     //this variable lets us know how many squares needed to fill the x axis
    var stepY = width/numberOfRows;

    for(var gridX=0; gridX < width; gridX += stepX) {//For loop that fills the X axis with squares
                                                     //Using the StepX variable it will create that number of squares to fill the X axis
        fill(gridX,height,100);                      //Changes the colour of the square with each step
        rect(gridX, 0, stepX, 100);                  //drawing a square at gridX position and its width is determined by the amount needed to fill the width of the canvas

    }

}

function keyPressed() {

    if (key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX'+mouseX + ' ' +'_MouseY'+mouseY,'png');

}
