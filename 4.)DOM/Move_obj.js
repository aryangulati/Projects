canvas =document.getElementById('mycanvas');
canvas.width=500;
canvas.height=500;

// canvas is used to draw graphics

//to draw graphics u need a context (pen obj)
pen = canvas.getContext('2d') // CanvasRenderingContext2D saw in console
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
pen.fillStyle ="orange";
//pen.fillRect(20,20,40,40);
rect = {
  x:20,
  y:20,
  w:40,
  h:40,
}
pen.fillRect(rect.x,rect.y,rect.w,rect.h)