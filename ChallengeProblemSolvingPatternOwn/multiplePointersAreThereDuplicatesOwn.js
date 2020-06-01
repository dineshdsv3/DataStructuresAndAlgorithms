// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in.
//  Sample Output 1 areThereDuplicates(1,2,3) => false
//  Sample Output 2 areThereDuplicates(1,2,2) => true
//  Sample Output 3 areThereDuplicates('a', 'b', 'c', 'a') => true

function areThereDuplicates(...args) {
    args.sort((a,b) => a > b);
	let startIndex = 0;
	let endIndex = startIndex + 1;
	while (endIndex < args.length) {
		if (args[startIndex] === args[endIndex]) {
			return true;
        } 
        startIndex ++
        endIndex ++
       
        
	}
	return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 0, 9, 8));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'b'));


// Using pointers solution Not successfull