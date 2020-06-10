//  Write a function called productOfArray which takes in an array of numbers
//  returns the product of them all.
//  Sample Output 1 productOfArray([1,2,3]) => 6
//  Sample Output 2 productOfArray([1,2,3,10]) => 60

function productOfArray(arr){
    let result = 1;
    function helper(hArr){
        if(hArr.length <1){
            return result;
        }
        result *= hArr[0] 
       helper(hArr.slice(1))
    }

    helper(arr)
    return result;
}


console.log(productOfArray([1,2,3]))
console.log(productOfArray([1,2,3,10]))
