function subTotal(arr) {
    var subArr = [];

    for(let i =0; i< arr.length ;i++) {
        var subTotal = 0;
        for(let j= 0; j<=i;j++){
            subTotal += arr[i]
        }
        subArr[i] = subTotal
    }
    console.log(subArr);
}

subTotal([1,2,3,4])