'use strict';

var tileCountX = 50;        //variables setting the amount of rects/tiles
var tileCountY = 10;

var hueValues = [];         //3 arrays initialised
var saturationValues = [];
var brightnessValues = [];

function setup() {
  createCanvas(800, 800);   //canvas setup along with colormode and nostroke enabled
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  // init with random values
  for (var i = 0; i < tileCountX; i++) {    //A for loop used to populate the arrays with random numbers
    hueValues[i] = random(360);             //These numbers will be used to create random colours
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  // white back
  background(0, 0, 100);                //setting the background colour

  // limit mouse coordinates to canvas
  var mX = constrain(500, 0, width);    //restrains the mouse x and y within a select range within the canvas
  var mY = constrain(500, 0, height);

  // tile counter
  var counter = 0;                      //a counter used to keep track

  // map mouse to grid resolution
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));      //mapping the mouseX+Y to 0 - width and height of the canvas and the tile count
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));     //storing that result in a variable, currentTileCountX
  var tileWidth = width / currentTileCountX;                          //now with the currentTileCountX you can find the tileWidth and height
  var tileHeight = height / currentTileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {                  //nested for loop to create and populate the canvas with rects
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;                        //used to allocate a colour to a specific tile 

      // get component color values
      fill(hueValues[index], saturationValues[index], brightnessValues[index]); // fills the tiles with a colour created from three arrays
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}
