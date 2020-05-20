function countUpAndDown(n) {
    console.log("going Up")
    for(let i =0 ; i<n; i++) {
        console.log(i)
    }
    console.log("Max Reached");
    console.log("going down");
    for (let i=n-1; i>=0; i--) {
        console.log(i)
    }
    console.log("Reached Bye Bye!!")
}

countUpAndDown(10);