'use strict';
var segmentCount = 10;   //segmentCount is the number of times the forloop needs to run in order to completet the circle
var radius = 360;        //the size of the circle
function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  colorMode(HSB, 360, width, height);
  background(360, 0 , height);
  var angleStep = 360/segmentCount;

  beginShape(TRIANGLE_FAN);         //TRIANGLE_FAN indicates that we are drawing a TRIANGLE FAN to create a circle
  vertex(width/2,height/2);
  for(var angle = 0; angle <= 360; angle += angleStep){
    var vertexX = width / 2 + cos(radians(angle)) * radius;
    var vertexY = height / 2 + sin(radians(angle)) * radius;
    vertex(vertexX, vertexY);
    fill(angle,width,height);
  }

  endShape();         //No longer use CLOSE becuase we dont want to out close out the shape
}
