function init(){
    var canvas = document.getElementById('mycanvas');
    W=H=canvas.width = canvas.height = 1000;
    pen=canvas.getContext('2d');
    snake ={
        init_len: 5,
        color:"blue",
        cells:[],
        direction:"right",

        // CreateSnake:function(){
        //     for(var i=this)
        // }


    };

}


function draw(){
//console.log("In Draw");

}

function update(){
    //console.log("In Update");
}

function gameloop(){

}

init();


var f= setInterval(gameloop,100);