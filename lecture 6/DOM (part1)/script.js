// how to access html through javascript 
console.dir(document.body);
console.log(document.head);
console.dir(document.body.childNodes);

// how to make dynamic changes in html and css through javascript (benefit of dom)
document.body.style.backgroundColor="purple";
document.body.childNodes[3].innerText="absc";

// how to access element of html in javascript to make changes

// 1-through id (give id to html element)
let heading=document.getElementById("heading");
console.dir(heading); //we use dir because window is object

// 2-through class 
let para=document.getElementsByClassName("para");
console.dir(para);
console.log(para);

// 3-through tags 
let button=document.getElementsByTagName("button")
console.dir(button);
console.log(button);

// 4-through query selector (most beneficial) access tags,class,ids
//tags through query selector
let firstEle = document.querySelector("p"); // access first element
console.dir(firstEle);
let allEle = document.querySelectorAll("p") //access all
console.dir(allEle);
//class through query selector
let classes = document.querySelector(".para"); // access first element
console.dir(classes);
// id through query selector 
let ids = document.querySelector("#heading"); // access first element
console.dir(ids);


