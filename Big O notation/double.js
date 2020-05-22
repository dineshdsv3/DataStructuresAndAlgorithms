function double(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		res[i] = arr[i] * 2;
	}
	console.log(res);
}

double([1, 2, 3]);
