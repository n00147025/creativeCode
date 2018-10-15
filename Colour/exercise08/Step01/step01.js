'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function preload() {     
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);//Setting the canvas to the width and hieght of the screen   
    colorMode(HSB, 360, 100, 100, 100);
    noCursor();                               
    noStroke();        
    noLoop();
}

function draw() {                                 
    //creating color palettes 
    
    for(var i = 0; i < colorCount; i++){
        if (i % 2 == 0) {
            
        }else {
            
        }
    }
    
}

