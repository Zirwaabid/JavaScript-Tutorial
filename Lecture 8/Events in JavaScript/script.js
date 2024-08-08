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
// benefit:we use multiple events on same element
let btn3=document.querySelector(".btn3");
btn3.addEventListener("click",()=>{
    sum=0;
    for (let i = 1; i <= 5; i++) {
        sum+=i;
        console.log(sum); 
    }
})
btn3.addEventListener("click",(evt)=>{
   console.log(evt);
})
btn3.addEventListener("click",()=>{
   console.log("Zirwa");
})
btn3.addEventListener("click",()=>{
   console.log("cat");
})