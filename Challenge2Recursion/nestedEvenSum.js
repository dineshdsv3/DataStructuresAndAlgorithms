// Write a recursive function called nestedEvenSum. Return the sum of all
// even numbers in an object which may contain nested objects.
// Sample output 1 nestedEvenSum(obj1); => 6
// Sample output 2 nestedEvenSum(obj2); => 10

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
};
var obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' },
};

function nestedEvenSum(obj, sum = 0) {
	for (let key in obj) {
		if (typeof obj[key] == 'object') {
			sum += nestedEvenSum(obj[key]);
		} else if (obj[key] % 2 == 0) {
			sum += obj[key];
		}
	}
	return sum;
}

// Solved using pure recursion. Needs revision

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
