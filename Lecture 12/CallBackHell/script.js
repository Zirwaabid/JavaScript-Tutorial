function getData(DataId, getNextdata) {
    setTimeout(() => {
        console.log("data =", DataId)
        if (getNextdata) {
            getNextdata();
        }
    }, 2000);
};
// if we want 3 data one by one then we do instead of this 
// getData(1);
// getData(2);
// getData(3);

//Callback Hell
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