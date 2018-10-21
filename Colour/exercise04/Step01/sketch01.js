'use strict';

var tileCountX = 2;       //variables used to keep track of the amount of tiles on the x & y
var tileCountY = 10;

var colorsLeft = []       //an array made to store the colors go from the left
var colorsRight = [];     //an arroy made to store the colors coming from the righ
var colors = [];          //colors made from the colour shaker are store in this array

var interpolateShortest = true; // boolean  used to keep track of the colormode

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();          //calling the shak function
}

function draw() {                                   //map(mousex,min,max,min,max)   int(map()) ensures that the result of the map is an integer
  tileCountX = int(map(mouseX, 0, width, 2, 20));   //mapping the mouseX and mouseY to the width and height of the canvas amd
  tileCountY = int(map(mouseY, 0, height, 2, 10));  //assigning the result to the tilecounts to ensure the number of tiles fits within the canvas
  var tileWidth = width / tileCountX;               //fits the tiles to the canvas ratio
  var tileHeight = height / tileCountY;             //so the if there is only 4 tiles on screen they will still fill the canvas
  var interCol;                                     //creating a variable
  colors = [];                                      //clearing the colors array

  for (var gridY = 0; gridY < tileCountY; gridY++) {    //for loop used to create the tiles on the canvas, gridY creates the tiles along the yaxis
    var col1 = colorsLeft[gridY];                       //assigning the colors from the arrays to the variable col1/2, determined by the gridY position.
    var col2 = colorsRight[gridY];

    for (var gridX = 0; gridX < tileCountX; gridX++) {    //gridX creates the tiles along the x axis
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);   //amount variable is mapped to the gridX, making it equal to tileCountX - 1. So we know how much tiles are on the X axis

      if (interpolateShortest) {                          //if interpolateShortest is = to true run this if statement
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount);         //lerpColor is taking a colour from the arrays col1, col2 and picking them from the range of 'amount'.
                                                          //assigning colors to the range of tiles. For instance the gradient will be smooth throughout.
        // switch back
        colorMode(HSB);
      } else {                                            //if not true run this else statement instead
        interCol = lerpColor(col1, col2, amount);
      }

      fill(interCol);                                     //fills the tiles with the colours

      var posX = tileWidth * gridX;                       //tiles width and height are related to the gridX and gridY amounts
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);            //code to draw the tiles

      // save color for potential ase export
      colors.push(interCol);                              //pushing the colours into an array
    }
  }
}

function shakeColors() {                                  //function created to grab random colours from an array with assigned ranges
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

function mouseReleased() {                                //When the mouse is released the shake function is called again to change the colours
  shakeColors();                                          // so you dont have to refresh the page to get new colours
}
