class Box {
  constructor(x, y, width, height) {

    this.width = width;
    this.height = height;
    this.posX = x;
    this.posY = y;
    
  }
  display(){
    stroke(0, 115, 240);
    strokeWeight(5);
    rectMode(CENTER);
    noFill();
    rect(this.posX, this.posY, this.width, this.height);
  }
};
