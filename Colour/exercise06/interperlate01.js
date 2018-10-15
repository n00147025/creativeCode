'use strict';

var colorsLeft=[];
var colorsRight=[];
var myColor;
//myColor = color(123,123,45); cant use it here due to color being a p5 function
var numberOfRows = 5;
var numberOfCols = 5;
//var tileW;
//var tileH;

function setup() {
    
    createCanvas(500, 500);
    noStroke();
    colorMode(HSB);
    shakeColor();
    
}

function shakeColor(){ 
    
    for(var i = 0; i < numberOfRows;i++){
        
        var randomColorLeft = color(random(0,255), random(0,255),random(0,255));
        var randomColorRight = color(random(0,255), random(0,255),random(0,255));
        colorsLeft.push(randomColorLeft);
        colorsRight.push(randomColorRight);
        console.log(colorsLeft); 
        console.log(colorsRight);
        
    }
    
}

function draw() { 
    var tileW = width/numberOfCols;
    var tileH = height/numberOfRows;
    
    for(var gridY=0; gridY < numberOfRows; gridY++){
        
        for(var gridX=0; gridX < numberOfCols; gridX++) {
            
            var amount = map(gridX, 0, numberOfCols-1, 0, 1);
            var startColor = colorsLeft[gridY];
            var endColor = colorsRight[gridY];
            
            var interCol=lerpColor(startColor,endColor,amount);
            
            fill(interCol);
            
            var xpos = tileW * gridX;
            var ypos = tileH * gridY;
            
            rect(xpos,ypos,tileW,tileH);
            
        }
   }
    
}

