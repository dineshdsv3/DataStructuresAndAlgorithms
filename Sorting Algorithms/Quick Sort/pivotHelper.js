// Pivot helper pseudocode
// It will help to accept three arguments: an Array, startIndex & endIndex
// Grab the pivot from the start of the array
// Store the current pivot index in a variable(this will keep track of where the pivot should end)
// Loop through the array from the start until the end.
//      If the pivot is greater than the current element, increment the pivot index variable
//       and then swap the current element with the element at the pivot index.
// Swap the starting element (i.e, the pivot) with the pivot index
// Return the pivot index.

function pivotHelper(arr, startIndex = 0, endIndex = arr.length - 1) {
	let pivot = startIndex;
	let pivotIndex = pivot;
	for (let i = 1; i < arr.length; i++) {
		if (arr[pivot] > arr[i]) {
			pivotIndex++;
			let temp = arr[i];
			arr[i] = arr[pivotIndex];
			arr[pivotIndex] = temp;
		}
	}
	let temp = arr[pivot];
	arr[pivot] = arr[pivotIndex];
	arr[pivotIndex] = temp;
	// console.log(arr);
	return pivotIndex;
}

console.log(pivotHelper([5, 3, 2, 1, 4, 6, 8, 9, 10, 11]));

// Understand and solved using my own