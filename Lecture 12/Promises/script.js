// let promise1=new promise((resolve,reject)=>{
//     console.log("I am a Promise")
//     // resolve("success")
//     reject("error occurred")
// });


let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am a promise")
        resolve("success")
    },2000)
    
});