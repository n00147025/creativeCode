//If changes to code arent working please right click refresh button and clear cache
//Ensure you are using local host to load images
'use strict';

var img;

function preload() {
    //loada an image fron a path and creates a p5i image from it
    img = loadImage('pictures/pic1.jpg');
}

function setup() {
    createCanvas(600, 600);
    noCursor();
    noStroke();

    //useful functions to stop loop effect of the draw function
    noLoop();
}

function draw() {
    //Loads the pixels data fro this image into the [pixels] attribute
    img.loadPixels();

    //img.pixels[i] will return the value for the colour in the array
    console.log(img.pixels[0]);
    //console.log(img.width);
    console.log(img);

}
