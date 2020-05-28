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

function validAnagram(first, second) {
	if (first.length !== second.length) {
		return false;
    }
    let lookup = {};
    for(let i = 0; i< first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1
    }
    // console.log(lookup);

    for(let i = 0; i<second.length; i++) {
        let letter = second[i]
        if(!(lookup[letter])){
            return false
        } else {
            lookup[letter] -= 1;
        }
    }
    return true
}

console.log(validAnagram('', ''));
console.log(validAnagram('awz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
