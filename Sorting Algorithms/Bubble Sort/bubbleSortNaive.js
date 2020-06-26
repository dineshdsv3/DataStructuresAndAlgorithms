function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j <= arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
			}
		}
    }
    return arr;
}

console.log(bubbleSort([3, 4, 1, 5, 2]));

//  Naive solution going through the loop several times without need.
//  We can refactor this by eliminating the last index after every inner loop
//  Check refactor solution for more optimized solution
