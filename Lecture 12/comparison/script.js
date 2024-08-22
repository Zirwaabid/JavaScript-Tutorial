// async-await>>promises>>callback hell 

function getData(DataId, getNextdata) {
    setTimeout(() => {
        console.log("data =", DataId)
        if (getNextdata) {
            getNextdata();
        }
    }, 2000);
};

//callback hell
getData(1, () => {
    console.log("getting data of 2......")
    getData(2,()=>{
        console.log("getting data of 3......")
        getData(3,()=>{
            console.log("getting data of 4......")
            getData(4)
        });
    });
});

//promises chaining
function getData(DataId, getNextdata) {
    setTimeout(() => {
        console.log("data =", DataId)
        if (getNextdata) {
            getNextdata();
        }
    }, 2000);
};
