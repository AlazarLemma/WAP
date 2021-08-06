const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
function getNumber(sum=0){
    readline.question("Enter please a number write stop to get the Sum--> ",(input)=>{
        if(input.toLowerCase()==="stop"){
            console.log(`Total sum ${sum}`);
            readline.close();
        }
        else{
            getNumber(parseInt(input)+sum);
        }
    });
}
getNumber();
    
