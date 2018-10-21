//If changes to code arent working please right click refresh button and clear cache
//Ensure you are using local host to load images
'use strict';

var img;
var colors = [];
var sortMode = null;

function preload() {                      //preload function, used to load in images and other important assets first. So the user isnt looking at an image loading on screen
  img = loadImage('pictures/pic1.jpg');   //loading the image pic1 into the img variable
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  noStroke();
}

function draw() {
  var tileCount = floor(width / max(mouseX, 5));
  var rectSize = width / tileCount;

  img.loadPixels();
  colors = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  gd.sortColors(colors, sortMode);                                //using the function sortColors from the gd library we can sort the colurs depending on the sort mode

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function keyReleased() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');    //saves and encodes it in ase file format to be used in adobe produst as a colour swatch
                                                                                              //usable because of the gd library
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');                            //saves the canvas with a timestamp and as a png

  if (key == '1') img = loadImage('pictures/pic1.jpg');     //loads in a different image depending on what button is pressed
  if (key == '2') img = loadImage('pictures/pic2.jpg');
  if (key == '3') img = loadImage('pictures/pic3.jpg');
  if (key == '4') img = loadImage('pictures/pic4.jpg');

  if (key == '5') sortMode = null;                          //changes the sortMode to rearange the pixels in different ways.
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}
