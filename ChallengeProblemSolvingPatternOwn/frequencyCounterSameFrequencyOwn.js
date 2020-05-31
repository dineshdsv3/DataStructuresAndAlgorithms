// write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
//  Sample Output 1 sameFrequency(182,281) => true
//  Sample Output 2 sameFrequency(34,14) => false
//  Sample Output 3 sameFrequency(3589578,5879385) => true
//  Sample Output 4 sameFrequency(22,222) => false


function sameFrequency(num1, num2) {
    // Take two empty 
    // Do the math and store the individual numbers in array
    let arr1 = storeInArray(num1)
    let arr2 = storeInArray(num2);
    // Take two empty objects
    let obj1 ={}, obj2 ={}
    // Store the values in the array to the respective objects
    for(let key of arr1) {
        obj1[key] = (obj1[key] || 0 ) + 1 
    }
    for(let key of arr2) {
        obj2[key] = (obj2[key] || 0 ) + 1 
    }
    // Compare both the objects and return the result
    for(let val in obj1) {
        if(!(val in obj2)){
           return false;
        }
        if(obj2[val] !== obj1[val]){
            return false;
        }
    }
    return true
}

function storeInArray(num) {
    let arr = []
    while(num>0){
        let a = parseInt(num/10);
        let b = num%10
        arr.push(b);
        num = a;
    }
    return arr;
}



console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578,5879385))
console.log(sameFrequency(22,222))
console.log(sameFrequency(123455,890768));


// Solved on my own using the O(5n) in term relate to Big O - O(n)