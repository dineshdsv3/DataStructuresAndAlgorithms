//  Write a function called isSubsequence which takes in tww strings
// and checks whether the characters in the first string form a
// subsequence of the characters in the second string. In other words,
// the function should check whether the characters in the first
// string appear somewhere in the second string, without order changing
// Sample Output 1 isSubsequence('hello', 'hello world'); => true
// Sample Output 2 isSubsequence('sing', 'sting') => true
// Sample Output 2 isSubsequence('abc', 'abracadabra') => true
// Sample Output 3 isSubsequence('abc', 'acb') => false

function isSubsequence(str1, str2) {
	var i = 0;
	var j = 0;
	if (!str1) return true;
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
}

console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('hello', 'hello world'))
