// Write a function called sumZero which accepts a sorted array
// of integers. The function should find the first pair where
// the sum is 0. Return an array that includes both values that
//  sum to zero or undefined if a pair does not exist
//  Sample Output 1 sumZero([-3,-2,-1,0,1,2,3]) ==> [-3,3]
//  Sample Output 2 sumZero([-2,0,1,3]) => undefined
//  Sample Output 3 sumZero([1,2,3]) => undefined

function sumZero(arr) {
	let startInd = 0;
	let endInd = arr.length - 1;
	while (endInd > startInd) {
		let sum = arr[startInd] + arr[endInd];
		if (sum === 0) {
			return [arr[startInd], arr[endInd]];
		} else if (sum > 0) {
			endInd--;
		} else {
			startInd++;
		}
	}
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2]));
console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));
