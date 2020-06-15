// Write a recursive function called isPalindrome which returns true if the
// string passes to it is a palindrome (reads the same forward and backward)
// Otherwise it returns false.
// Sample Output 1 isPalindrome('awesome') => false
// Sample Output 2 isPalindrome('foobar') => false
// Sample Output 3 isPalindrome('tacocat') => true

function isPalindrome(str) {
	let Sind = 0;
    let endInd = (str.length-1) - Sind;
    let res1 ,res2 =true;
	function helper(hstr) {
		if (Sind >= endInd) {
			// console.log('triggered');
            res1 = true;
            return res1
		} else if (hstr[Sind] !== hstr[endInd]) {
            // console.log(hstr[Sind],hstr[endInd])
			res2 = false;
		}
        Sind++;
        endInd--;
		helper(hstr);
	}
    helper(str);
    return res1 && res2
}

// Solved using helper method recursion

console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))
