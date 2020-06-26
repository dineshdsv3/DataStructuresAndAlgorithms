function bubbleSort(arr) {
    for(let i = arr.length; i > 0;i--){
        for(let j = 0; j< arr.length-1;j++){
            if(arr[j] >arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

    }
    return arr;
}


console.log(bubbleSort([3, 4, 1, 5, 2]));