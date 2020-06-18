// Write a function called capitalizeWords. Given an array of words, return
// a new array containing each word capitalized.
// Sample Output 1 capitalizeWords(words) => ["I","AM","LEARNING","RECURSION"]

let words = ['i','am','learning','recursion'];

function capitalizeWords(arr) {
    let resultArr = [];
    if(arr.length === 0){
        return resultArr;
    }
    resultArr.push(arr[0].toUpperCase())
    resultArr = resultArr.concat(capitalizeWords(arr.slice(1)))
    return resultArr;
}
// Solved using pure recursion. Clean solution

console.log(capitalizeWords(words))