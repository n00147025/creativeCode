function setup() {
    
    createCanvas(500,500);
    colorMode(HSB, width, height, 100);
    //rectMode(CENTER);
    noStroke();
    
}

function draw() {
    
    var numberOfCols = mouseX + 2;
    var numberOfRows = mouseY + 2;
    var stepX = width/numberOfCols;
    var stepY = width/numberOfRows;
    
    for(var gridY=0; gridY < height; gridY += stepY) {
        
        for(var gridX=0; gridX < width; gridX += stepX) {
            
            fill(gridX,height-gridY,100);
            rect(gridX, gridY, stepX, stepY);
            
        }
        
    }
    
}

function keyPressed() {
    
    if (key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX'+mouseX + ' ' +'_MouseY'+mouseY,'png');
    
}