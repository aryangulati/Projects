//another way by making a class
function fruit(taste,color){
    this.color=color;
    this.taste=taste;

}
//creating object using new keyword
let orange =new fruit("sour","orange");
let cucumber =new fruit("bitter","green");
let mango =new fruit("sweet","yellow");


//one way of creating objects 
// var apple ={
//     taste="sweet",
//     color="red",
// }

//Class Keyword introduce in  [ECMAScript 2015]
class car{
    constructor(tyres,color){
        this.color=color;
        this.tyres=tyres;
    }
};
let b= new car("3","red");
