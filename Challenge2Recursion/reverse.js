// Write a recursive function called reverse which accepts a string and returns
// a new string in reverse.
// Sample Output 1 reverse('awesome') => emosewa
// Sample Output 2 reverse('rithmschool') => loohcsmhtir

function reverse(str) {
	let result = [];
	let strArr = str.split('');
	let res = '';

	function helper(hstr) {
		if (hstr.length <= 0) {
			return result;
		}
		result.push(hstr.pop());
		result = result.concat(helper(hstr));
	}

	helper(strArr);
	result.map((ele) => {
		if(ele) {
			res +=ele
		}
	});
	return res;
}

// Solved using the helper method recursion but not so good.

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
