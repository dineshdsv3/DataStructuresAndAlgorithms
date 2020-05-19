var now = require("performance-now")
function addUptoN(num) {
	let result = 0;
	for (let i = 1; i <= num; i++) {
        result += i;
	}
	console.log(result);
}
let t1 = now()
addUptoN(10000000);
let t2 = now()
console.log(`Time elapsed is ${Math.abs((t1-t2)/1000)} seconds`)