function setup() {
    createCanvas(720,720);
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
}

function draw() {
    //Step 2
    background(mouseY/2, 100, 100);           //sets the hue of the background to mouseY positon on the screen
    fill(360-mouseY/2, 100, 100);             //sets the colour of the rect to be the oposite of the colour of the background
    rect(width/2, height/2, mouseX, mouseX);  //draws the rect in the center of the canvas, and its width and height is determined by the mouseX and mouseY position
}

function keyPressed() {                       //this function is used to same our canvas
    if (key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX'+mouseX + ' ' +'_MouseY'+mouseY,'png'); //simple if statement that is the 'S' key is presed is will saveCanvas
                                                                                                          //and using the Generative Design library it will name the image with a timestamp
                                                                                                          //along with the mouse x & y position. It will also be saved as a png
}
