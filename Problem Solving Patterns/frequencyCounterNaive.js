// Write a function called "same", which accept two arrays.
// The function should return true if every value in the array
// has its' corresponding value squared in the second array.
// The frequency of values must be the same.
// Sample - same([1,2,3], [4,1,9]) ==> true
// Sample2 - same([1,2,3], [1,9]) ==> false
// Sample3 - same([1,2,1],[4,4,1]) ==> false (must be same frequency)

function same(arr1, arr2) {

    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i<arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i]* arr1[i]);
        if(correctIndex == -1) {
            return false
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

console.log(same([1, 2, 3], [1, 9]));
console.log(same([1,2,3], [4,1,9]))
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1,2,3,2],[4,4,1,9]))