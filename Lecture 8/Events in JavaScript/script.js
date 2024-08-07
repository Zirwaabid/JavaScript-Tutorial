let btn1 = document.querySelector("#btn1");
btn1.onclick = () => { //1click
    console.log("button was clicked")
    let a = 25;
    a++
    console.log(a); //26
}

let box=document.querySelector("div");
box.onmouseover=()=>{
    console.log("you are inside div");
    alert("hi!");
}