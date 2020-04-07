let arr = ["Apple","Mango","Guava"];
console.log(arr);
for(let i=0;i<5;i++){
    console.log(arr[i]);

}
arr.push("Banana");//Insert at back
arr.pop();// remove from back
arr.shift();// remove from front 
arr.unshift("Kiwi");//insert at front 
arr.indexOf("Kiwi");//finds you the index

if(arr[0]=="Apple"){
    console.log("Apple");
}
else{
    console.log("No it is  ", arr[0]);
}

/*
arr.push("Banana")
arr.pop() remove and return  last element of the arr
arr.indexOf("Mango") it find index of element
arr.shift()  remove element from front
arr.unshift("Kiwi") 
*/  