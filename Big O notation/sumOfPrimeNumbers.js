var now = require("performance-now");

function sumOfPrimeNumbers(n){
    let primeNumbers = [];
    let result = 0;
    for(let i = 0;i<=n;i++){
        if(primeCheck(i)) {
            primeNumbers.push(i);
        }
    }
    
   primeNumbers.forEach((ele) => result+=ele);
    console.log(result);
}

function primeCheck(n) {
	let count = 0;

	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			count++;
        }
    }
    if(count === 2) {
        // console.log(`${n} is a prime`)
        return true;
    }else {
        // console.log("its not a prime")
        return false;
    }
}

let t1 = now()
sumOfPrimeNumbers(100000);
let t2 = now()
console.log(`Time elapsed is ${Math.abs((t1-t2)/1000)} seconds`)