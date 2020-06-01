// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in.
//  Sample Output 1 areThereDuplicates(1,2,3) => false
//  Sample Output 2 areThereDuplicates(1,2,2) => true
//  Sample Output 3 areThereDuplicates('a', 'b', 'c', 'a') => true

function areThereDuplicates() {
    let obj = {}
    for(let key of arguments) {
        obj[key] = (obj[key] || 0) +1;
    }
    for(let key in obj) {
        if(obj[key] > 1){
            return true;
        }
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))

// Solved using the frequencyCounter pattern with  Big O -O(n)