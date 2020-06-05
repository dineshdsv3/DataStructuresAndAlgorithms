function factorial(num) {
    if(num === 1) return 1;
    else {
        return num * factorial(num-1)
    }
}


function facotorialNonRecursive(num) {
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total
}

console.log(facotorialNonRecursive(5))
console.log(factorial(5))