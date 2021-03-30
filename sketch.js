var canvas;
var music;
var box1 , box2 , box3 , box4 , Mbox ;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(670 , 460 , 130 , 50);
    box1.shapeColor = "red";
    
    box2 = createSprite(500 , 460 , 130 , 50);
    box2.shapeColor = "green";

    box3 = createSprite(330 , 460 , 130 , 50);
    box3.shapeColor = "yellow";

    box4 = createSprite(160 , 460 , 130 , 50);
    box4.shapeColor = "blue";

    //create box sprite and give velocity

    Mbox = createSprite(670 , 400 , 50 , 130);
    Mbox.shapeColor = "black";
    

}

function draw() {
    background(rgb(169,169,169));
    Mbox.x = World.mouseX;
    Mbox.y = World.mouseY;
   
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    // collision effect for box1.
    if(Mbox.x - box1.x < box1.width/2 + Mbox.width/2 
       && box1.y - Mbox.y < box1.width/2 + Mbox.width/2 
       && Mbox.x - box1.x < box1.width/2 + Mbox.width/2 
       && box1.x - Mbox.x < box1.width/2 + Mbox.width/2){ 
            
          Mbox.shapeColor = "blue";
          box1.shapeColor = "blue";
       }
    else{Mbox.shapeColor = "black";
         box1.shapeColor = "red";

    }

    // collision effect for box2.
    if(Mbox.x - box2.x < box2.width/2 + Mbox.width/2 
        && box2.y - Mbox.y < box2.width/2 + Mbox.width/2 
        && Mbox.x - box2.x < box2.width/2 + Mbox.width/2 
        && box2.x - Mbox.x < box2.width/2 + Mbox.width/2){ 
             
           Mbox.shapeColor = "red";
           box2.shapeColor = "skyblue";
        }
     else{Mbox.shapeColor = "black";
          box2.shapeColor = "green";
 
     }

     // collision effect for box3.
     if(Mbox.x - box3.x < box3.width/2 + Mbox.width/2 
        && box3.y - Mbox.y < box3.width/2 + Mbox.width/2 
        && Mbox.x - box3.x < box3.width/2 + Mbox.width/2 
        && box3.x - Mbox.x < box3.width/2 + Mbox.width/2){ 
             
           Mbox.shapeColor = "brown";
           box3.shapeColor = "brown";
        }
     else{Mbox.shapeColor = "black";
          box3.shapeColor = "yellow";
 
     }


     // collision effect for box4.
     if(Mbox.x - box4.x < box4.width/2 + Mbox.width/2 
        && box4.y - Mbox.y < box4.width/2 + Mbox.width/2 
        && Mbox.x - box4.x < box4.width/2 + Mbox.width/2 
        && box4.x - Mbox.x < box4.width/2 + Mbox.width/2){ 
             
           Mbox.shapeColor = "black";
           box4.shapeColor = "orange";
        }
     else{Mbox.shapeColor = "black";
          box4.shapeColor = "blue";
 
     }


    drawSprites();
}
