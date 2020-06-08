// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// Sample Output 1  power(2,0) => 1
// Sample Output 2 power(2,2) => 4
// Sample Output 3 power(2,4) => 16

function power(base, exp) {
	let result = 1;
	function helper(helpBase, helpExp) {
		if (helpExp <= 0) {
			return result;
		}
		result *= helpBase;
		helpExp--;
		helper(helpBase, helpExp);
	}

	helper(base, exp);
	return result;
}

console.log(power(2, 0));
console.log(power(3, 4));
console.log(power(2, 2));

// Solved using helper method recursion
