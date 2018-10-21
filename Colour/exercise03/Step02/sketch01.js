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
  var angleStep = 360/segmentCount;     //angleStep calculates the number of steps needed to complete the circle

  beginShape(TRIANGLE_FAN);         //TRIANGLE_FAN indicates that we are drawing a TRIANGLE FAN to create a circle
  vertex(width/2,height/2);         //Centers the circle, ensuring each triangle drawn for the circle starts from the center

  for(var angle = 0; angle <= 360; angle += angleStep){       //for loop to draw triangles to create a circle. It increments angle each time by adding angle to angleStep
    var vertexX = width / 2 + cos(radians(angle)) * radius;   //calculates the x,y of each vertex, Find the edge point of the circle based on an angle and a distance
                                                              //in this case it radius*cos(angle) + width/2 finds the x position of the edge, and again radius*height(angle)+height/2 finds te y
    var vertexY = height / 2 + sin(radians(angle)) * radius;  //multiples by radians to convert the degrees into radians
    vertex(vertexX, vertexY);                                 //Now we draw a vertex to the previous 2 x,y positions just calculated
    fill(angle,width,height);                                 //fill each angle based on the height and width of the canvas
  }

  endShape();         //No longer use CLOSE becuase we dont want to out close out the shape
}
