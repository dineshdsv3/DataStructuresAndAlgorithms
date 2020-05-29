// Implement a function called countUniqueValues, which accepts
//  a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted
// Sample Output 1 countUniqueValues([1,1,1,1,1,2]) => 2
// Sample Output 2 countUniqueValues([1,2,3,4,4,4,7,7,12,13]) => 7
// Sample Output 3 countUniqueValues([]) => 0
// Sample Output 4 countUniqueValues([-2,-2,-1,0,1]) => 4

function countUniqueValues(arr) {
	if(arr.length === 0) return 0;
	let a = 0;
	let b = a + 1;
	while (b < arr.length) {
		if (arr[a] !== arr[b]) {
			a++;
			arr[a] = arr[b];
			// console.log(a, b);
		} else if (arr[a] == arr[b]) {
			// console.log(a, b)
			b++;
		}
	}
	return a + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -2, -1, 0, 1]));
