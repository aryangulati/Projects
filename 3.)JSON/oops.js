//object oriented programminfg in javascript

//allow to create objects without defining the class
//One way of creating javascript (JSON) -Javascript Object Notation 

var bird ={
    x :100,
    y: 20,
    color: "blue",// string
    eggs:["one","two","three","four"],//array
    fly:function(){
        console.log("Bird is flying",this.x,this.y);
    //this here refer to the current object of the bird class
    }

};
//indx 0 ke liye one ptint hoha(val) ese hi sab ke liye 
//for loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);

}

//for each loop
bird.eggs.forEach(function(val,idx){
    console.log(idx,val);
});
