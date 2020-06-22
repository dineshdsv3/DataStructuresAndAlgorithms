// Write a function that accepts a sorted array and a value
//  1. Create a left pointer at the start of the array and a right pointer at end
//  2. While the left pointer comes before the right pointer:
//      Create a pointer in the middle
//      If you find the value you want, return the index
//      If the value is too small, move the left pointer up
//      If the value is too large, move the right pointer down
//  3. If you never find the value, return -1
// Sample output binary([1,3,4,5,7,9,10,18,19],10) => 6

function binary(arr,num) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let center = Math.floor((left+right)/2)
        if(arr[center] === num ) {
            return center;
        } else if( arr[center] > num) {
            right = center;
        } else if(arr[center] < num) {
            left = center
        }
    }
    return -1;

}

console.log(binary([1,3,4,5,7,9,10,18,19,20],1))


// Solved and undestood the binary searching algorithm
