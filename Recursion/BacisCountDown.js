function countNum(num){
    if(num<=0) {
        console.log("all done") // This condition is the base case
        return;
    }
    console.log(num);
    num--;                      // Here we are changing the input
    countNum(num);              // Here we are recursing
}


countNum(5)