function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1)
}


// function sumRange2(num) {
//     if(num===1) return 1;
//     else{
//         return num + sumRange2(num-1)
//     }
// }

console.log(sumRange2(5));