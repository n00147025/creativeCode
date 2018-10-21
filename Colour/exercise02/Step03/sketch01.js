function setup() {

    createCanvas(500,500);
    colorMode(HSB, width, height, 100);
    //rectMode(CENTER);
    noStroke();

}

function draw() {

    //var numberOfCols = mouseX + 2;       //having the numberOfCols & numberOfRows = to the mouseX & mouseY will increase & decrease the number of coloums and rows on screen
    //var numberOfRows = mouseY + 2;       // The +2 stops the web browser from crashing as it can scale out of control as the mouse loeaves the canvas

    var stepX = mouseX + 2;            //using these instead of numberOfCols & numberOfRows will follow the mouse exactly
    var stepY = mouseY + 2;            //using these create less lag than the width/numberOfCols method
    //var stepX = width/numberOfCols;
    //var stepY = height/numberOfRows;     //similar to stepX, stepY allows us to determine how many steps it will take to fill the Y axis
                                         //So it keeps with the height of the canvas

    for(var gridY=0; gridY < height; gridY += stepY) {    //Our for loop for the X axis is now nested within another for loop
                                                          //Now this nested loop starts a 0,0 and draws a row of rects along the x axis,
                                                          //increases the y position and draws another row of rects along the x axis, and will continue until it fills the canvas with rects.
        for(var gridX=0; gridX < width; gridX += stepX) {

            fill(gridX,height-gridY,100);       //Fills the squares with unique colours, the reason for height - gridY is to postion the saturated colours at the top of the canvas
            rect(gridX, gridY, stepX, stepY);   //having the rect be placed on gridX & gridY allows the nested loop fill the canvas with squares. By incrementing it everytime.

        }

    }

}

function keyPressed() {

    if (key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX'+mouseX + ' ' +'_MouseY'+mouseY,'png');

}
