// Write a function called "same", which accept two arrays.
// The function should return true if every value in the array
// has its' corresponding value squared in the second array.
// The frequency of values must be the same.
// Sample - same([1,2,3], [4,1,9]) ==> true
// Sample2 - same([1,2,3], [1,9]) ==> false
// Sample3 - same([1,2,1],[4,4,1]) ==> false (must be same frequency)

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let freqCounter1 = {};
	let freqCounter2 = {};

	for (let key of arr1) {
		freqCounter1[key] = (freqCounter1[key] || 0) + 1;
	}
	for (let key of arr2) {
		freqCounter2[key] = (freqCounter2[key] || 0) + 1;
    }
    
    // console.log(freqCounter1)
    // console.log(freqCounter2)

    for(let key in freqCounter1) {
        if(!((key * key) in freqCounter2)){
            return false
        }
        if(freqCounter2[(key*key)] !== freqCounter1[key]) {
            // console.log(false)
            // console.log(`key is ${key}`)
            // console.log(`freq1 is ${freqCounter1[key]}`)
            // console.log(`freq2 is ${freqCounter2[key * key]}`)
            return false;
        }
    }
    return true;

}

console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1,2,3,2],[4,4,1,9]))
console.log(same([1,2,3,4,5],[25,16,9,1,4]))
