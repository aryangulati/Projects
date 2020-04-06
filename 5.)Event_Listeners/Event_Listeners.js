//Event Listeners
// function f(){
//     console.log("you clicked on the document");
// }
// document.addEventListener("click",f);

//we can also do whole thing for canvas
canvas= document.getElementById("mycanvas");
function f(){
    console.log("you clicked on the canvas instead of document");
}
canvas.addEventListener("click",f);

// function f2(){
//     console.log("a key got presssed")
// }
// document.addEventListener("keydown",f2);

//if we want to  know what key got pressed than
function f2(e){
    console.log("a key got presssed",e.key)// if we just print e
}
document.addEventListener("keydown",f2);
//we can add control by using event listeners
