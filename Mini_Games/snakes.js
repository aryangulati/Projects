function init(){
    canvas = document.getElementById('mycanvas');
    W=H=canvas.width = canvas.height = 1000;
    pen=canvas.getContext('2d');
    cs=40;
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
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-2,cs-2);
            }
           

        },


    };
    snake.createsnake();

}


function draw(){
//console.log("In Draw");
snake.drawsnake();
}

function update(){
    //console.log("In Update");
}

function gameloop(){
draw();
update();
}

init();


var f= setInterval(gameloop,100);