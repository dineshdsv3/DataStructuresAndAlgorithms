let strArr = ['Apple','Abs','Ball','Bat','cat','car']
let numArr = [23,45,9,8,5,28,30]

let b = strArr.sort();   // Works fine in alphabetical sorting
// console.log(b)

let c = numArr.sort();  // Doesnt work with numbers array because of unicode characters
// console.log(c);  

//  But this builtin sort method accepts a comparator function to tell how to sort
//  If function retuns -ve number, num1 should come before num2 
//  If function returns +ve number, num1 should come after num2
//  If function returns 0, num1 & num2 are the same as far as sort is concerned

function ascendingSort(num1,num2) {
    return num1 - num2;
}

let d = [16,5,19,20].sort(ascendingSort)
console.log(d)

function descendigSort(num1,num2) {
    return num2 -num1;
}
let e = [10,98,76,9,78,54].sort(descendigSort);
console.log(e)

function shortStringFirst(str1,str2) {
    return str1.length - str2.length;
}
let f = ['apple','bat','cat','car','donkey','horse'].sort(shortStringFirst)
console.log(f)