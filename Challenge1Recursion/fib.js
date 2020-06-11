//  Write a recursive function called fib which accepts a number and returns nth
//  number in the Fibonacci sequence. Recall that the Fibonacci sequence is the
//  sequence of whole numbers 1,1,2,3,5,8, ... which starts with 1 &1, and every
//  number thereafter is equal to the sum of the previous two numbers
//  Sample Output 1 fib(4) => 3
//  Sample Output 2 fib(10) => 55
//  Sample Output 3 fib(28) => 317811
//  Sample Output 4 fib(35) => 9227465

function fib(num) {
	let arr = [1, 1];
	let startInd = 0;
	let endInd = 1;
	function helper(hnum) {
		if (arr.length == hnum) {
			return arr[arr.length - 1];
		} else {
			arr.push(arr[startInd] + arr[endInd]);
			// console.log(arr.length)
			startInd++;
			endInd++;
			helper(hnum);
		}
	}
	helper(num);
	return arr[arr.length - 1];
}

// solved using helper method recursion

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
