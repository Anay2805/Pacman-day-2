class Wall {
  constructor(x, y, width, height) {

    this.width = width;
    this.height = height;
    this.posX = x;
    this.posY = y;
    
  }
  display(){
    noStroke();
    rectMode(CENTER);
    this.sprite = createSprite(this.posX, this.posY, this.width, this.height);
    this.sprite.shapeColor = "blue"
  }
};
