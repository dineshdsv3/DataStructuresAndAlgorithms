function collectOddValues(arr) {
	let returnArr = [];

	function helper(helperArr) {
		if (helperArr.length <= 0) {
			return;
		}
		if (helperArr[0] % 2 !== 0) {
			returnArr.push(helperArr[0]);
		}

		helper(helperArr.slice(1));
	}

	helper(arr);
	return returnArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
