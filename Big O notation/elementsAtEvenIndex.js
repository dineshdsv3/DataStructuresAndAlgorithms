function elementsAtEvenIndex(arr) {
    let res = [];

    for(let i =0; i<arr.length;i++) {
        if(i%2 === 0) {
            res[i/2] = arr[i]
        }
    }
    console.log(res);
}

elementsAtEvenIndex([1,2,3,4,5,6,7,8,9])