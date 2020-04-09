function init(){
    var canvas = document.getElementById('mycanvas');
    W=H=canvas.width = canvas.height = 1000;
    pen=canvas.getContext('2d');
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
        // drawsnake:function(){
        //     pen.fillReact(this.cells[i])

        },


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