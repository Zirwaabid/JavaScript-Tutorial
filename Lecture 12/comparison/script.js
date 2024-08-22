// async-await>>promises>>callback hell 

//callback hell

// function getData(DataId, getNextdata) {
//     setTimeout(() => {
//         console.log("data =", DataId)
//         if (getNextdata) {
//             getNextdata();
//         }
//     }, 2000);
// };


// getData(1, () => {
//     console.log("getting data of 2......")
//     getData(2,()=>{
//         console.log("getting data of 3......")
//         getData(3,()=>{
//             console.log("getting data of 4......")
//             getData(4)
//         });
//     });
// });

//promises chaining

// function getdata(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data=", dataId)
//             resolve("success")
//         }, 2000);
//     });
// };
// console.log("fetching data1.....")
// getdata(1)
//     .then((res) => {
//         console.log("fetching data2.....")
//         return getdata(2);
//     })
//     .then((res) => {
//         console.log("fetching data3.....")
//         return getdata(3);
//     })
//     .then((res) => {
//         console.log("fetching data4.....")
//         return getdata(4);
//     })
//     .then((res) => {
//         console.log(res);
//     });


//simpler way given above of the following solution
// console.log("fetching data2.....")
// getdata(2).then((res) => {
//     console.log(res);
//     console.log("fetching data3.....");
//     getdata(3).then((res) => {
//         console.log(res);
//         console.log("fetching data4.....");
//         getdata(4).then((res) => {
//             console.log(res);
//         });
//     });
// });

//async await
function getdata(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data=", dataId)
            resolve("success")
        }, 2000);
    });
};

async function getAllData() {
    console.log("fetching data1.....")
    await getdata(1);
    console.log("fetching data2.....")
    await getdata(2);
    console.log("fetching data3.....")
    await getdata(3);
    console.log("fetching data4.....")
    await getdata(4);
}

// also we can use iifi like below that execute the code immediately without call it
(async function () {
    console.log("fetching data1.....")
    await getdata(1);
    console.log("fetching data2.....")
    await getdata(2);
    console.log("fetching data3.....")
    await getdata(3);
    console.log("fetching data4.....")
    await getdata(4);
})();