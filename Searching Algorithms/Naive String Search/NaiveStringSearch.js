// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match keep going.
// If you complete the inner loop and find a match, increment the count of matches
// Return the count.
// Sample Output 1  stringSearch('whomgjjshomg','omg') => 2

function stringSearch(str1, str2) {
	let count = 0;
	for (let i = 0; i < str1.length; i++) {
		for (let j = 0; j < str2.length; j++) {
			if(str2[j] !== str1[i+j]) {
                break;
            }
            if(j === str2.length -1){
                count++;
            }
        }
	}
	return count;
}

console.log(stringSearch('whomgjjshomg', 'omg'));

//  Understood but need to implement some more examples