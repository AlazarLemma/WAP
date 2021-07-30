Array.prototype.bubbleSort = function(){
  

  // by using nested loop
for(var i = 0; i < this.length; i++){
  
  // Last i elements are already in place  
  for(var j = 0; j < ( this.length - i -1 ); j++){

      if(this[j] > this[j+1]){ // check if current is grater than 
          // If the condition is true then swap them
          var temp = this[j]
          this[j] = this[j + 1]
          this[j+1] = temp
      }
  }
  }
  // Print the sorted array
  return this;
}


String.prototype.filter = function(array){
  let w = this.split(" ");
  let filteredResult = w.filter((notword) => {
      return !(array.includes(notword));
  });

  return filteredResult.join(" ");
}

