// Write a function which accepts an array and a value. Loop through the array and check if
// the current array element is equal to the value. If it is found return the index otherwise -1


function linearSearch(arr,num) {

   for(let i = 0; i<=arr.length; i++) {
       if(num === arr[i]) {
           return i;
       }
   }
   return -1
}

console.log(linearSearch([1,2,3,4,5,6,7],7))