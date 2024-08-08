let btn1 = document.querySelector("#btn1");
btn1.onclick = () => { //1click
    console.log("button was clicked")
    let a = 25;
    a++
    console.log(a); //26
}

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("you are inside div");
    alert("hi!");
}

//access all the info about events used in element eg button used below:
btn2 = document.querySelector("#btn2")
btn2.ondblclick = (events) => {
    console.log(events);
    // below all info is available in events but we also print it separately 
    console.log(events.type); //type=dblclick
    console.log(events.target);
    console.log(events.clientX, events.clientY);
}

// event listener is more convenient way to use events in js 
// benefit:we use multiple events on same element eg button
let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
    sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i;
        console.log(sum);
    }
})
btn3.addEventListener("click", (evt) => {
    console.log(evt);
});
btn3.addEventListener("click", () => {
    console.log("2");
});
//to remove we should use these things to remove any event
const handler1 = () => {
    console.log("1")  
};//now this function is use anywhere by the name of handler1
btn3.addEventListener("click", handler1 
);

// how to delete eventlistener (eg:delete 1)
btn3.removeEventListener("click", handler1);