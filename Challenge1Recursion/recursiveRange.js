// Write a function called recursiveRange which accepts a number and adds up
// all the numbers from 0 to the number passed to the function
// Sample Output 1 recursiveRange(6) => 21
// Sample Output 2 recursiveRange(10) => 55

// Helper method recursion
function recursiveRange(num) {
	let result = 0;
	function helper(hnum) {
		if (hnum <= 0) {
			return result;
		}
		result += hnum;
		hnum--;
		helper(hnum);
	}
	helper(num);
	return result;
}

// Pure method Recursion
function recursiveRange1(num) {
	if (num == 0) return 0;
	return num + recursiveRange1(num - 1);
}

console.log(recursiveRange1(6));
console.log(recursiveRange1(10));
