// 1-add button and give styling through js 
let button=document.createElement("button");
button.innerText="Click me!";
button.style.backgroundColor="red";
button.style.color="white";
document.querySelector("body").append(button);

// 2-give new class to para in css and link it to the para throug js using classList
let para=document.querySelector("p");
para.classList.add("para2");


