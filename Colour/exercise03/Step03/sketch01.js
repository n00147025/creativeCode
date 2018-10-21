'use strict';
var segmentCount = 360;  //segmentCount to 360 to create a full circle
var radius = 360;
function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  colorMode(HSB, 360, width, height);
  background(360, 0 , height);
  var angleStep = 360/segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width/2,height/2);

  for(var angle = 0; angle <= 360; angle += angleStep){
    var vertexX = width / 2 + cos(radians(angle)) * radius;

    var vertexY = height / 2 + sin(radians(angle)) * radius;
    vertex(vertexX, vertexY);
    fill(angle,mouseX,mouseY);                                //fill the hue based on the angle and the SAT and BOlD based on the mouseX & Y
  }

  endShape();
}

function keyPressed(){        //keyPressed function to give controls to the user
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');    //an if statement to save the canvas as a png with a timestamp from the gd library
    switch (key) {                  //a switch case allowing the user to change the number of segmentCounts to change the number of triangles used to create the cricle
      case '1':
        segmentCount = 360;
        break;
      case '2':
        segmentCount = 45;
        break;
      case '3':
        segmentCount = 24;
        break;
      case '4':
        segmentCount = 12;
        break;
      case '5':
        segmentCount = 6;
        break;
    }
}
