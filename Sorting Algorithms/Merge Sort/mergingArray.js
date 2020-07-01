//  Merging Array Pseudocode
//  Create an empty array, take a look at the smallest values in each array
//  While there are still values we haven't looked yet
// If the value in the first array is smaller than the value in the second array, push the value of
//  first array into our results & move on to the next value in the first array.
// If the value in the second array is smaller than the value in the first array, push the value of
//  second array into our results & move on to the next value in the second array.
// Once we exhaust one array, push in all the remaining values from other array
// Sample Output - mergeArray([1,10,50],[2,14,99,100]) => [1,2,10,14,50,99,100];

function mergeArray(arr1, arr2) {
	let resArr = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			resArr.push(arr1[i]);
			i++;
		} else {
			resArr.push(arr2[j]);
			j++;
		}
	}
	while (j < arr2.length) {
		resArr.push(arr2[j]);
		j++;
	}
	while (i < arr1.length) {
		resArr.push(arr1[i]);
		i++;
	}

	return resArr;
}

console.log(mergeArray([1, 3, 4, 5, 7], [2, 6, 8, 14, 99, 100]));

// Understood Merging Array