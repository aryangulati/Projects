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
            // console.log("updatition in snake");
            // this.cells.pop();

            // var headX =this.cells[0].x;
            // var headY =this.cells[0].y;

            // var X= headX +1;
            // var Y= headY;
            // this.cells.unshift({x:X,y:Y});
            console.log("updatition in snake according to the direction property ");
            this.cells.pop();
            var headX =this.cells[0].x;
            var headY =this.cells[0].y;

            var nextX,nextY;
            if(this.direction=="right"){
                nextX=headX + 1;
                nextY = headY;
            }
            else if(this.direction=="left"){
                nextX=headX - 1;
                nextY = headY;
            }
            else if(this.direction=="down"){
                nextX = headX;
                nextY = headY+ 1;
            }
            else{
                nextX=headX ;
                nextY = headY- 1;
            }
            this.cells.unshift({x:nextX,y:nextY});





        },


    };
    snake.createsnake();
    //add a event listener on document object
    function keypressed(e){
        //console.log("key pressed",e.key);//as we want specefic property of the object that is key so e.key
        //we can use conditional statements
        if(e.key=="ArrowRight"){
            snake.direction="right";
        }
        if(e.key=="ArrowLeft"){
            snake.direction="left";
        }
        if(e.key=="ArrowDown"){
            snake.direction="down";
        }
        if(e.key=="ArrowUp"){
            snake.direction="up";
        }
        console.log(snake.direction);


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