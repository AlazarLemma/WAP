function max(x , y){
    if(x>y){
        return x
    }else return y;
}

function max3(x,y,z){
    maxvalue=0;
    if(x>y){
        maxvalue=x;
    }else{
        maxvalue=y;
    }if(maxvalue<z){
        maxvalue=z;
    } return maxvalue;
}

function isVowel(char){
    let count=0;
    let vowel =['e','a','i','o','u'];
    for(let a=0;a<vowel.length;a++){
        if(char == vowel[a]){
            count++;
        }
    }
    if(count ==0){
        return false;
    }else return true;
}

function isVowel(char){
    let count=0;
    let vowel =['e','a','i','o','u'];
    if(vowel.includes(char)){
        return true;
    }else
        return false;
}

function sum(arr){

    let sum=0;
    
    for(let i=0;i<arr.length;i++){
                    sum+=arr[i];
    }return sum;

}

function multiply(a){

let multip=1;

for(let i=0;i<a.length;i++){
            multip*=a[i];

}return multip;

}
function reverse(s){
    let split=s.split("");
    let value=split.reverse();

        return value.join("");
}
function findLongestWords(arr){
      let max=0;
        let result=0;
        for(let i = 0; i < arr.length; i++){
            let len = arr[i].split("").length;
            if(len > max){
                max = len;
                result = i;
            }
        
        }return arr[result];
    }
    

function filterLongWords(arr, a){
    let rsult=[];
   for(let i=0;i<arr.length;i++){
            if(arr[i].length > a){
                rsult.push(arr[i])
            }

   }return rsult;

}
 function multiplyfield(arr){
     let b=[];
    b = arr.map(function(elem, i, array) {
        return elem *10;
 });
 return b;
 }

 function elementsEqualToThree(arr){
        let b=[];

     b=arr.filter(function (elem, i, array){
        return elem==3   
 });
 return b;
 }
 function reduce(arr){
    let b=0;

b=arr.reduce(function(prevr, elem ,i, array){
        return prevr * elem;

});return b;

}

function myFunction(expected,test){
    if(expected===test){
        return "TEST IS SUCCEEDED";
    }else{
        return "TEST FAILED";
    }
}



function myFunctionTestForArrays(expected, test){
    if(JSON.stringify(expected)==JSON.stringify(test)){
        return " TEST SUCCEEDED ";
    } else{
        return " TEST FAILED EXPECTED " + expected + " FOUND " + test;
    }
}



console.log("Expected output of max(10,56) is 56 : "+myFunction(56,max(10,56)));
console.log("Expected output of max3(10,23,56) is 56 : "+myFunction(56,max3(10,23,56)));
console.log("Expected output of isVowel(a) is true : "+myFunction(true, isVowel("e")));
console.log("Expected output of sum(4,4,4,4) is 16 : "+myFunction(16,sum([4,4,4,4])));
console.log("Expected output of multiple(4,4,4,4) is 256 : "+myFunction(256,multiply([4,4,4,4])));
console.log("Expected output of reverse(world) is drow : "+myFunction("drow",reverse("word")));
console.log("Expected output of findLongestWords([\"1\",\"two\",\"ande\"]) is ande : "+myFunction("ande",findLongestWords(["1","two","ande"])));
console.log("Expected output of findLongestWords([\"one\", \"foryou\", \"page\, \"grid\"], 5) is [\"foryou\"]: " + myFunctionTestForArrays(["foryou"], filterLongWords(["one", "foryou", "page", "grid"], 5)));
console.log("Expected output of multiplyEachElementBy10([10, 20, 30, 40]) is [100, 200, 300, 400]: " + myFunctionTestForArrays([100, 200, 300, 400], multiplyfield([10, 20, 30, 40])));
console.log("Expected output of elementsEqualTo3([1, 2, 3, 4, 3, 5]) is [3, 3]: " + myFunctionTestForArrays([3, 3], elementsEqualToThree([1, 2, 3, 4, 3, 5])));
console.log("Expected output of productOfAllElements([1, 2, 3, 4, 5,6]) is 120: " + myFunction(720, reduce([1, 2, 3, 4, 5,6])));

