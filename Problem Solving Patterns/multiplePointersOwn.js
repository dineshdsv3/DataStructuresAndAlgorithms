// Write a function called sumZero which accepts a sorted array
// of integers. The function should find the first pair where
// the sum is 0. Return an array that includes both values that
//  sum to zero or undefined if a pair does not exist
//  Sample Output 1 sumZero([-3,-2,-1,0,1,2,3]) ==> [-3,3]
//  Sample Output 2 sumZero([-2,0,1,3]) => undefined
//  Sample Output 3 sumZero([1,2,3]) => undefined

function sumZero(arr) {
	// create an empty array where the result is pushed
	let resArr = [];
	// loop through an array 2 times and return the result
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0){
                // console.log(arr[i],console.log(arr[j]))      ==> O(n^2)
                resArr.push(arr[i])
                resArr.push(arr[j])
            }
            if(resArr.length === 2){
                return resArr;
            }
        }
    }
    return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2,0,1,3]))
console.log(sumZero([1,2,3]))