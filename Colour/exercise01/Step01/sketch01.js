function setup() {
    //Step 1
    createCanvas(720,720);          //creates a canvas 720 x 720
    colorMode(HSB, 360, 100, 100);  //sets the colour mode to HSB, and sets its ranges
    rectMode(CENTER);               //setting the rectMode to CENTER makes the center of the square the x & y position of the square the center
    noStroke();                     //no Outline
}

function draw() {
    background(200, 100, 100);        //sets the background to a blue
    fill(360, 100, 100);              //colours in the square red
    rect(width/2, height/2, 100, 100);//width/2, height/2 draws the rect in the center of the canvas with the width and hight of 100
}
