var surface1;
var surface2;
var surface3;
var surface4;
var box;
var piano;
var Edges;


function preload(){
   piano = loadSound("sounds/music.mp3");
    
}


function setup(){
   createCanvas(400,400);

  

    //create 4 different surfaces
    surface1 = createSprite(45,390,95,15);
    surface1.shapeColor = "blue";

    surface2 = createSprite(150,390,95,15);
    surface2.shapeColor = "orange";

    surface3 = createSprite(255,390,95,15);
    surface3.shapeColor = "red";

    surface4 = createSprite(360,390,95,15);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    
    box = createSprite(200,150,15,15);
    box.shapeColor = "white";
    box.velocityX = 2;
    box.velocityY = 3;
    
    createSprite(random(20,750));
}

function draw() {
    background("grey");
    //create edgeSprite
    Edges = createEdgeSprites();
    

  
    //add condition to check if box touching surface and make it box

   
    if (surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
       
    }

    if (surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "orange";
       
    }

    

    if (surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
        piano.play();
    }

    if(surface3.isTouching(box)){
        box.shapeColor = "red"
         box.velocityX = 0;
         box.velocityY = 0;
         piano.stop();
     }
   
    
   

    

    bounceOff();
    drawSprites();
}

function bounceOff(){
    createEdgeSprites();

      box.bounceOff(Edges);
     }

     
  