let a=13;
console.log(a);

let b= [1,2,3,4,5,6];
console.log(b);
console.log("hello World");

c = 20; //global variable
var d = 30; //function Scope
let e = 50; //block Scope 

//let has a block scope and var has a function scope 

function fun(){
    let a=5;
    if(a===5){
     let b =10;  //block Scope
        console.log("inside the function",b);

    }
    console.log("outside ",b);
}
function fun1(){
    let a=5; 
    if(a===5){
     let f =10;  //block Scope
        console.log("inside the function",f);

    }
    console.log("outside ",f);
}
function fun2(){
    let a=5;
    if(a===5){
     var b =10;//function Scope
        console.log("inside the function",b);

    }
    console.log("outside ",b);
}
function fun3(){
    let a=5;
    if(a===5){
     f =10;//Global variable
        console.log("inside the function",f);

    }
    console.log("outside ",f);
}

function square_root(n){
    return Math.sqrt(n);
}

function square_root1(n){
    console.log(Math.sqrt(n));

    return ;
}

function square_root2(n){
    console.log(Math.sqrt(n));

    return 5;
}

function square_root3(n){
    console.log(Math.sqrt(n));

    return "hello USER";
}

