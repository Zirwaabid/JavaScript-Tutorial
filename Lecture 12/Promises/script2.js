// promises chaining 
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success")
        }, 4000);
    });
};
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("success")
        }, 4000);
    });
};
console.log("fetching data1......");

asyncFunc1().then((res) => {
    console.log("fetching data2......");
    asyncFunc2().then((res)=>{
    });
});
// also write this same function in short form as given above

// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2......");
//     let p2 = asyncFunc2();
//    p2.then((res)=>{
//    });
// });
