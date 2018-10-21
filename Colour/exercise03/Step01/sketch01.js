'use strict'; // an expression that allows me to use undeclared variables

function setup() {
  createCanvas(800, 800);       //setup of the canvas
  stroke(255);                  //sets the outline to white
}

function draw() {
  colorMode(HSB, 360, width, height);   //setting the colour mode to HSB and its ranges will the width & height of the canvas
  background(0);                        //setting the background colour to black

  beginShape();         //beginShape allows us to create more complex shapes.
    vertex(30,70);      //a vertex simple draws a line from one point to another
    vertex(70,20);      //for instance x,y 30,70 to 70,20
    //vertex(50,75);
  endShape(CLOSE);      //the CLOSE is a indicator to stop drawing this shape
}
