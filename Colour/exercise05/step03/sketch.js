//If changes to code arent working please right click refresh button and clear cache
//Ensure you are using local host to load images
'use strict';

var img;
var colors = [];

function preload() {

    img = loadImage('pictures/pic1.jpg');
}

function setup() {
    createCanvas(600, 600);
    noCursor();
    noStroke();
    noLoop();
}

function draw() {
    var tileCount = floor(width / max(mouseX, 5));
    var rectSize = width / tileCount;

    img.loadPixels();
    colors = [];

    for (var gridY = 0; gridY < tileCount; gridY++) {
        for(var gridX = 0; gridX < tileCount; gridX++) {
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);
            var i = (py * img.width + px ) * 4;
            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
            colors.push(c);
        }
    }


    // Drawing each row and coloumn with the colors from the colors array
    var i = 0;
    for(var gridY = 0; gridY < tileCount; gridY++){
        for(var gridX = 0; gridX < tileCount; gridX++){
            fill(colors[i]);
            rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
            i++;
        }
    }
    console.log(img.pixels[0]);
    console.log(colors);
    console.log(img);

}
