// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.
// Sample output 1 flatten([1,2,3,[4,5]]) => [1,2,3,4,5]
// Sample output 2 flatten([1,[2,[3,4],[[5]]]]) => [1,2,3,4,5]
// Sample output 3 flatten([1],[2],[3]) => [1,2,3]
// Sample output 4 flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) => [1,2,3]

function flatten(arr) {
    let resArr = []

    function helper(hArr) {
        if(hArr.length === 0){
            return resArr;
        }
        if(!Array.isArray(hArr[0])){
            resArr.push(hArr[0])
        } else {
            helper(hArr[0])
        }
        return helper(hArr.slice(1))
    }
    helper(arr)
    return resArr;
}
// Solved using helper method recursion. Clean solution but not effective in all cases

console.log(flatten([1,2,3,[4,5]]))
console.log(flatten([1,[2,[3,4],[[5]]]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))