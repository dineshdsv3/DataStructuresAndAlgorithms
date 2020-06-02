// Write a function called averagePair. Given a sorted array  of
// integers and a target average, determine if there is a pair
// of values in the array where the average of the pair equals the
// target average. There may be more than one pair that matches the target
// Sample Output 1 - averagePair([1,2,3],2.5) => true
// Sample Output 2 - averagePair([1,3,3,5,6,7,10,12,19],8) => true
// Sample Output 3 - averagePair([-1,0,3,4,5,6], 4.1) => false
// Sample Output 4 - averagePair([],4) => false

function averagePair(arr, num) {
	if (arr.length < 1) return false;
	let startInd = 0;
	let endInd = arr.length - 1;
	while (startInd < endInd) {
        let avg = (arr[startInd] + arr[endInd]) / 2;
        if(avg === num) {
            return true;
        }else if(avg >num) {
            endInd--
        }else {
            startInd++
        }
    }
    return false;
}

console.log(averagePair([1,2,3],2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1,0,3,4,5,6], 4.1))
console.log(averagePair([],4))

// Solved by taking pointer from either end