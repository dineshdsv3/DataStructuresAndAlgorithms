// Pseudocode
// Store the first elemenet as the smallest value you've seen so far
// Compare this item to the next item on the array until you find a smaller number
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue
// until the end of the array
// If the "Minimum" is not the value(index) you initially began with, swap with the two values.
// Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minimum = i;
		console.log('loop start');
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minimum]) {
				minimum = j;
			}
		}
		if (i !== minimum) {
			let temp = arr[i];
			arr[i] = arr[minimum];
			arr[minimum] = temp;
		}
	}
	return arr;
}

console.log(selectionSort([5, 1, 4, 2, 3]));

// Understood selection sort. need to do more examples.