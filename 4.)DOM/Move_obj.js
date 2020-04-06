// canvas =document.getElementById('mycanvas');
// canvas.width=500;
// canvas.height=500;

// canvas is used to draw graphics

//to draw graphics u need a context (pen obj)
//pen = canvas.getContext('2d') // CanvasRenderingContext2D saw in console
/*
pen.fillRect(20,20,20,20)

pen.fillStyle="orange"
"orange"
pen.fillRect(20,20,40,40)

pen.arc(60,60,50,0,2*Math.PI)

pen.stroke()

pen.fill()

pen.fillStyle="white"
"white"
pen.fill()

pen.fillRect(20,20,20,20)

*/
//pen.fillStyle ="orange";
//pen.fillRect(20,20,40,40);
rect = {
  x:20,
  y:20,
  w:40,
  h:40,
  speed:10,//update the cordinates of rect

}


//gameloop
function init(){
  console.log("In init function");
  canvas =document.getElementById('mycanvas');
  W=canvas.width=500;
  H=canvas.height=500;
  pen = canvas.getContext('2d')
  game_over=false;

}

function draw(){
  //console.log("In draw");
  //it help to clear so it seems like it is moving
  pen.clearRect(0,0,W,H);
  pen.fillRect(rect.x,rect.y,rect.w,rect.h)
//draw rect on screen
pen.fillStyle ="orange";

}

function update(){
  //console.log("In update");
  rect.x+=rect.speed;
  //to move the rect in the pacticular field
  if(rect.x>W-rect.w||rect.x<0){
    rect.speed*=-1;
  }

}

function gameloop(){
  if(game_over==true){
    clearInterval(f);
  }
  console.log("In the Gameloop");//this show no. of times output comes on screen
  draw();
  update();
}

init();
//gameloop();//one function call to draw one function call to update
//setInterval(gameloop,100);//call particular func after every 100ms
/*for making game stop use var f which 
use to stop game when we make a 
if statement false in console*/
var f=setInterval(gameloop,100);
//check inside this if under gameloop




