// Write a function which takes in a string and returns count of each character in the string

function CharCount(str) {
    let str1 = str.toLowerCase();
    let x = str1.split("");
    let res = {};
    // console.log(x);
    x.map((ele) => {
        if(res[ele]){
            res[ele] += 1
        } else {
            res[ele] = 1
        }
    })
    console.log(res);

}

CharCount("ABCabcd FEDG")