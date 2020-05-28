// given two strings, write a function to determine if the
// second string is an anagram of the firt. An anagram is
// a word, phrase, or name formed by rearranging the letters
// of another, such as cinema, formed from iceman

// Sample Output1  validAnagram("", "") ==> true
// Sample Output2  validAnagram("aaz", "zza") ==> false
// Sample Output3  validAnagram("anagram", "nagaram") ==> true
// Sample Output4  validAnagram("rat", "car") ==> false
// Sample Output1  validAnagram("awesome", "awesom") ==> false
// Sample Output1  validAnagram("qwerty", "qeywrt") ==> true
// Sample Output1  validAnagram("texttwisttime", "timetwisttext") ==> true


// Points
//  create a function which takes 2 strings
function validAnagram(str1, str2) {
    // if lengths are different return false
	if (str1.length !== str2.length) {
		return false;
    }
    // convert strings into arrays
	let strArr1 = str1.split('');
	let strArr2 = str2.split('');
	let obj1 = {},
        obj2 = {};
    // Store the arrays into objects
	for (let val of strArr1) {
		obj1[val] = (obj1[val] || 0) + 1; //O(n)
	}
	for (let val of strArr2) {
		obj2[val] = (obj2[val] || 0) + 1; //O(n)
    }
    // console.log(obj1)
    // console.log(obj2)
    // Compare the objects and return the result
	for (key in obj1) {
		// console.log(key)
		if (!(key in obj2)) {
			return false;
        }                                  //O(n)
        if(obj1[key] !== obj2[key]){
            return false
        }

    }
    return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('awz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram("rat", "car"))
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram("texttwisttime", "timetwisttext"))