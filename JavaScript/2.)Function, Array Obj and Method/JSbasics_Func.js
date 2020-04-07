// square_root(10);// sqrt_n(10);
/* in hoisting in js function defined in
first manner will move to the top of the stack  
second type of function will not be hoisted */

//function declaration
function square_root(n){
    console.log("In first square root function");
    return;
}
//  Function  Hoisting
//function expression
var sqrt_n=function(){
    console.log("In second square root function");
    return;
}
square_root(10);
sqrt_n(10);



