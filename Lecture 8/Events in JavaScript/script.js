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