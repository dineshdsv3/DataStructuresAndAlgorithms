// Write a function factorial which accepts a number and returns the factorial
// of that number. A factorial is the product of an integer and all the integers below
//  Sample Output 1 factorial(1) => 1
//  Sample Output 2 factorial(4) => 24
//  Sample Output 3 factorial(7) => 5040


// Pure recursion
function factorial(num){
    if(num === 1) {
        return 1
    }
    return num *= factorial(num-1)
}
// Helper method recursion
function factorial1(num){
    let result = 1;
    function helper(hnum) {
        if(hnum === 1){
            return 1
        }
        result *= hnum;
        hnum--
        helper(hnum)
    }

    helper(num)
    return result;
} 

console.log(factorial(1))
console.log(factorial(7))