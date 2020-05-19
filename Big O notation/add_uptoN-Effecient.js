var now = require("performance-now")
function addUptoN(n) {
    console.log(n*(n+1)/2);
}

let t1 = now()
addUptoN(10000000);
let t2 = now()
console.log(`Time elapsed is ${Math.abs((t1-t2)/1000)} seconds`)