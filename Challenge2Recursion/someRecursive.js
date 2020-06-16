// Write a recursiive function called someRecursive which accepts an array an
// a callback. The function returns true if a single value in the array returns
// true when passed to the callback. Otherwise it returns false.
// callback isOdd = val => val % 2 !==0;
// Sample Output 1 someRecursive([1,2,3,4],isOdd) => true
// Sample Output 2 someRecursive([4,6,8,9], isOdd) => true
// Sample Output 3 someRecursive([4,6,8], isOdd) => false
// Sample Output 4 someRecursive([4,6,8], val => val > 10); => false

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, isOdd) {
	if (arr.length === 0) {
		return false;
	}
	if (isOdd(arr[0])) {
		return true;
	}
	return someRecursive(arr.slice(1), isOdd);
}

// Solved using pure method recursion. Clean solution

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4,6,8], val => val > 10))