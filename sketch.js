var pacman, pacmanImage;
var sc = 40;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var mazeImage;

function preload(){
	pacmanImage = loadAnimation("pacman.png","pacmanclosed.png");
}

function setup(){
    var canvas = createCanvas(600, 600);
     wall1 = new Wall(60,360,120,7);  
     wall2 = new Wall(60,240,120,7);  
     wall3 = new Wall(60,160,120,7); 
     wall4 = new Wall(120,200,7,88);  
     wall5 = new Wall(60,440,120,7);    
     wall6 = new Wall(120,400,7,88)
     wall7 = new Wall(300,0,600,7);
     wall8 = new Wall(0,80,7,160);
     wall9 = new Wall(3.5*sc,13*sc,5*sc,7);
     wall10 = new Wall(200, 11.5*sc, 7, 3*sc);
     wall11 = new Box(80, 80, 80, 80);
     wall12 = new Wall(12*sc, 10*sc, 7, 2*sc);
     wall13 = new Wall(13.5*sc, 11*sc, 127, 7);
     wall14 = new Wall(13.5*sc, 9*sc, 127, 7);
     wall15 = new Wall(13.5*sc, 6*sc, 127, 7);
     wall16 = new Wall(12*sc, 5*sc, 7, 2*sc);
     wall17 = new Wall(13.5*sc, 4*sc, 127, 7);
     wall18 = new Box(13*sc, 2*sc, 80, 80)
     wall19 = new Wall(10*sc, 6*sc, 7, 4*sc);
     wall20 = new Wall(5*sc, 6*sc, 7, 4*sc);
     wall21 = new Wall(6*sc, 8*sc, 2*sc, 7);
     wall22 = new Wall(9*sc, 8*sc, 2*sc, 7);
     wall23 = new Box(7.5*sc, 3.5*sc, 3*sc, 7*sc);
     wall24 = new Wall(4.5*sc,14*sc,7*sc,7);
     wall25 = new Wall(4.5*sc,14*sc,7*sc,7);
     wall26 = new Wall(10*sc, 11.5*sc, 7, 3*sc);
     wall27 = new Wall(11.5*sc, 13*sc, 5*sc, 7);
     wall28 = new Wall(11.5*sc, 14*sc, 5*sc, 7);
     wall29 = new Wall(4*sc, 4*sc, 7, 6*sc );
     wall30 = new Wall(11*sc, 4*sc, 7, 6*sc );
     wall31 = new Wall(4*sc, 10*sc, 7, 4*sc );
     wall32 = new Wall(11*sc, 10*sc, 7, 4*sc );
     wall33 = new Wall(3*sc, 7*sc, 2*sc, 7);
     wall34 = new Wall(3*sc, 8*sc, 2*sc, 7);
     wall35 = new Wall(12*sc, 8*sc, 2*sc, 7);
     wall36 = new Wall(12*sc, 7*sc, 2*sc, 7);
     wall37 = new Wall(2.5*sc, 12*sc, 3*sc, 7);
     wall38 = new Wall(12*sc, 7*sc, 2*sc, 7);

    pacman = createSprite(200, 540, 40, 40);
    pacman.addAnimation("Pac",pacmanImage);
    pacman.scale = 0.2;
}

function draw(){
    background(0);
 
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    wall19.display();
    wall20.display();
    wall21.display();
    wall22.display();
    wall23.display();
    wall24.display();
    wall25.display();
    wall26.display();
    wall27.display();
    wall28.display();
    wall29.display();
    wall30.display();
    wall31.display();
    wall32.display();
    wall33.display();
    wall34.display();
    wall35.display();
    wall36.display();
    wall37.display();
    wall38.display();
    //wall39.display();
    drawSprites();
}

function setDir(x, y){
	pacman.x = pacman.x + x;
	pacman.y = pacman.y + y;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    setDir(-10, 0);
  } 
 if (keyCode === RIGHT_ARROW) {
    setDir(10, 0);
  } 
  if (keyCode === UP_ARROW) {
    setDir(0, -10);
  } 
    if (keyCode === DOWN_ARROW) {
    setDir(0, 10);
  } 
 

}

