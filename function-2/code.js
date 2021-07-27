

//4

function sum(arr){
return arr.reduce((acc,current)=>acc+=current,0);
}
//5
let arr=[1,2,10];
function multip(arr){
return arr.reduce((acc,current)=>acc*=current,1);
}
//6

function reverse(str){
//let splited=str.split("");
return str.split("").reduce((element, i)=>i + element)
}
//reverse

let value=["hello","h3","h2"];
function filterLong(arr, len){
 return arr.filter(e=>e.length>len);
}


