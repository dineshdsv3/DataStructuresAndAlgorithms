// Write a recursive function called capitalizeFirst. Given an array of strings,
// Capitalize the first letter of each string in the array.
// Sample output capitalizeFirst(['car','taco','banana']) => ['Car','Taco','Banana']

function capitalizeFirst(arr) {
	let result = [];
	if (arr.length === 0) {
		return result;
    }
    let str = arr[0]
    result.push(str[0].toUpperCase() + str.slice(1))
    result = result.concat(capitalizeFirst(arr.slice(1)))
    return result;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
