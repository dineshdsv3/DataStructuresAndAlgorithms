// Pseudocode
// Start looping from with a variable called "i" the end of arrray towards the beginning
// Start an inner loop with a variable called "j" from the beginning until "i-1"
// If arr[j] > arr[j+1] ,swap those two values
// Return the sorted array

function bubbleSort(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		// console.log(arr[i])
		for (let j = 0; j <= i - 1; j++) {
			// console.log(arr[j+1])
			if (arr[j] > arr[j + 1]) {
				// console.log(arr[j], arr[j + 1]);
				let temp = arr[j];                                      
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				// console.log(arr);
			}
		}
	}
	return arr;
}

console.log(bubbleSort([3, 4, 1, 5, 2]));

// Havent solved on my own. Need to see instrcutor solution and find bugs

// Edit: Swapping in the loop solved the solution without writing a separate function