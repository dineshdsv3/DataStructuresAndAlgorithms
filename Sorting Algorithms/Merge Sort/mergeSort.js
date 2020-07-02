// MergseSort pseudocode
// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with sorted arrays until
//  you are back at the full length of the array.
// Once the array has been merged back together, return the merged(& sorted) array.

// merging two arrays
function mergeArray(arr1, arr2) {
	let resArr = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		// minimum value will go first in the array
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

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return mergeArray(left, right);
}

console.log(mergeSort([1, 9, 3, 4, 5]));

// Understood the algorithm. Just need to keep revising
