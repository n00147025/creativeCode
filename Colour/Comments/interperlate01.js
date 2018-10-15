// P_1_2_2_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * extract and sort the color palette of an image
 *
 * MOUSE
 * position x          : resolution
 *
 * KEYS
 * 1-4                 : load different images
 * 5                   : no color sorting
 * 6                   : sort colors on hue
 * 7                   : sort colors on saturation
 * 8                   : sort colors on brightness
 * 9                   : sort colors on greyscale (luminance)
 * s                   : save png
 * c                   : save color palette
 */
'use strict';

var img;                                    //creating vaiable img
var colors = [];                            //creating an colors array
var sortMode = null;                        //setting the boolean sortMode to null

function preload() {                        //creating a preload function
  img = loadImage('data/pic1.jpg');         //loading in an image first and assigning it to the variable 'img'
}

function setup() {                          //creating the function 'setup'
  createCanvas(600, 600);                   //creatting a canvas 600px by 600px
  noCursor();                               //cursor does not appear on canvas
  noStroke();                               //any drawn onto the canvas will not have a stroke or outline
}

function draw() {                                   //creating a function called draw
  var tileCount = floor(width / max(mouseX, 5));    //creates a variable called 'tileCount', floor is a method that takes in one parameter and rounds it down, max is a method that finds the largests value in sequence of numbers and then returns that value, in this case the width is divided by max
  var rectSize = width / tileCount; //setting the size of the rectangle to the width divided by the number of tiles. Taking that number and assigning it to the variable rectSize

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

  gd.sortColors(colors, sortMode);

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
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') img = loadImage('data/pic1.jpg');
  if (key == '2') img = loadImage('data/pic2.jpg');
  if (key == '3') img = loadImage('data/pic3.jpg');
  if (key == '4') img = loadImage('data/pic4.jpg');

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}
