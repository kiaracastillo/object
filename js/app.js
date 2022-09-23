//Kiara Castillo Magallanes
//09/22/2022
//Class Intro Media App

function setup() { 
    createCanvas(500, 500);
  }
  
  function draw() {
  
    //  variables control the size of the pumpkin
  
    const pumpkinCenterX = width / 2;
    const pumpkinCenterY = height / 2;
    const pumpkinWidth = 350;
    const pumpkinHeight = 300;
  
    // gray black
    background(0);
  
    // stem
    stroke(79, 56, 10);
    strokeWeight(20);
  
    line(pumpkinCenterX,
      pumpkinCenterY - pumpkinHeight * .5,
      pumpkinCenterX - pumpkinWidth * .25,
      pumpkinCenterY - pumpkinHeight * .70);
  
    // orange
    fill(235, 138, 8);
    stroke(0, 100);
    strokeWeight(3);
  
    // pumpkin
    ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth, pumpkinHeight);
    ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .75, pumpkinHeight);
    ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .5, pumpkinHeight);
    ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .25, pumpkinHeight);
  }
