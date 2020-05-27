// Write a function called "same", which accept two arrays.
// The function should return true if every value in the array
// has its' corresponding value squared in the second array.
// The frequency of values must be the same.
// Sample - same([1,2,3], [4,1,9]) ==> true
// Sample2 - same([1,2,3], [1,9]) ==> false
// Sample3 - same([1,2,1],[4,4,1]) ==> false (must be same frequency)

// Steps to solve
// function needs to accept two arrays
function same(arr1, arr2) {
	// check the length of 2 arrays, if not same return false
	if (arr1.length !== arr2.length) {
		return false;
	} else {
        // Square the first array and store it in object1;
        let sqrdArr = arr1.map((ele) => ele*ele)
        // Take an empty object
        let resobj = {};
       for (let  i = 0; i< sqrdArr.length;i++) {
           for( let j = 0; j< arr2.length; j++) {
               if(sqrdArr[i] === arr2[j]) {
                //  if matches store the value in an object
                   if(resobj[sqrdArr[i]]){
                       resobj[sqrdArr[i]] += 1
                   } else {
                       resobj[sqrdArr[i]] = 1;
                   }
               }
               
           }
       }
    //    check the length of  result object with the arr1 
      if(Object.values(resobj).filter(ele => ele ===1).length === arr1.length) {
          // return true or false based on the result
          return true
      } else {
          return false
      }
	}
}

console.log(same([1, 2, 3], [1, 9]));
console.log(same([1,2,3], [4,1,9]))
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1,2,3,2],[4,4,1,9]))


// This code dont work when the length of array is greater than 3.