function init(){
    //docment object is directly accissble in js code
    // we can find canavs obj by its id "mycnavas"
    canvas = document.getElementById('mycanvas');
    W=H=canvas.width = canvas.height = 1000;
    pen=canvas.getContext('2d');//pen object to draw something on canvas
    cs=40;

    //snake object 
    snake ={
        init_len: 5,
        color:"blue",
        cells:[],
        direction:"right",

        

        createsnake:function(){
            for(var i=this.init_len;i>0;i--){
                this.cells.push({x:i,y:0});
            }
        },
        drawsnake:function(){
            for(var i=0;i<this.cells.length;i++){
                pen.fillStyle = this.color;
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-3,cs-3);
            }

           
           

        },

        
        updatesnake:function(){
            console.log("updatition in snake");
            this.cells.pop();

            var headX =this.cells[0].x;
            var headY =this.cells[0].y;

            var X= headX +1;
            var Y= headY;
            this.cells.unshift({x:X,y:Y});
        },


    };
    snake.createsnake();
    //add a event listener on document object
    function keypressed(e){
        console.log("key pressed",e.key);//as we want specefic property of the object that is key so e.key
    }
    document.addEventListener('keydown',keypressed)

}


function draw(){
//console.log("In Draw");
pen.clearRect(0,0,W,H);
snake.drawsnake();
}

function update(){
    //console.log("In Update");
snake.updatesnake();    


}

function gameloop(){
draw();
update();
}

init();


var f= setInterval(gameloop,100);