// Write a function called maxSubarraySum which accepts
// an array of integers and a number called "n". The
// function should calculate the maximum sum of "n"
// consecutive elements in the array.
// Sample Output 1 maxSubarraySum([1,2,5,2,8,1,5],2) ==>10
// Sample Output 2 maxSubarraySum([1,2,5,2,8,1,5],4) ==>17
// Sample Output 3 maxSubarraySum([4,2,1,6],1) ==>6
// Sample Output 4 maxSubarraySum([4,2,1,6,2],4) ==>13
// Sample Output 5 maxSubarraySum([],4) ==>null

function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i = num; i< arr.length; i++){
        tempSum = (tempSum + arr[i] - arr[i-num]);
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([0, 1, 2, 3, 4, 5, 6], 3));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([9, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
