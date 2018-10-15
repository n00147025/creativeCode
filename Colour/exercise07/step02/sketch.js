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
    //define your number of tiles
    var tileCount = 2;
    
    //and then the width of each tile
    var rectSize = width / tileCount;
    
    img.loadPixels();
    
    //we make sure to empty our colours array each time
    // the draw function occurs
    colors = [];
    
    //if our image is 400px wide and high and our tile count is 20
    //which will mean our tile width is also 20px. We will want to grab the colous
    //at 0,20,40,60... and store them
    
    for (var gridY = 0; gridY < tileCount; gridY++) {
        // for each gridX value we need to work out a color to be stored
        for(var gridX = 0; gridX < tileCount; gridX++) {
            //We work out a pixel value in the x and y
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);
            
            //We then convert this to the appropriate index value in the pixels array
            var i = (py * img.width + px ) * 4;
            
            //We then create a colour object
            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
            colors.push(c);
        }
    }
    console.log(img.pixels[0]);
    console.log(colors);
    console.log(img);
    
}

