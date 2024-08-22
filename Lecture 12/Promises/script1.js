let promise1=new promise((resolve,reject)=>{
    console.log("I am a Promise")
    // resolve("success")
    reject("error occurred")
});


let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am a promise")
        resolve("success")
    },2000)

});

// last time we solve this problem by using callback that cause callback hell so we use promises to solve this :
function getdata(dataId, GetNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data =", dataId);
            resolve("success")
            // reject("some error occurred")
            if (GetNextData) {
                GetNextData();
            }
        }, 7000);
    });
};

//how to handle promises
const getPromises = (() => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
      resolve("successful");
    // reject("error")
        
    });
});
let promise2 = getPromises();
promise2.then((res) => {  //for resolve
    console.log("promise successful",res);
});

promise2.catch((err)=>{
    console.log("rejected",err)
});