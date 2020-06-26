function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        let noswaps = true;
        for(let j = 0; j< i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noswaps = false
            }
        }
        if(noswaps) break;
    }
    return arr;
}

console.log(bubbleSort([3, 4, 1, 5, 2]));

// If the array is almost sorted, Bubble sort works much faster and we need to use noswaps logic.