let div = document.querySelector("div");
console.log(div);
let p = document.querySelector("p")
console.log(p);

// how to access attributes in javascript 

// attribute present inside div 
let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

// attribute present inside p 
console.log(p.getAttribute("class"));

// how to change attributes name through javascript 
console.log(p.setAttribute("class", "newClass"));

//how to access style in js
console.log(div.style);
div.style.backgroundColor = "cyan";
div.style.fontSize = "23px";
div.innerText = "Pakistan";

// how to add new Element through js 
let newBtn = document.createElement("button");
newBtn.innerText = "click me"; //add button to main element
let main = document.querySelector("main");
main.append(newBtn); //add in last of main
main.prepend(newBtn); // add in first of main
main.before(newBtn); //=add before node (main)
main.after(newBtn); // add after node (main)

// add new heading 
let heading = document.createElement("h1");
heading.innerHTML = "<i>Hi I am zirwa Abid!</i>";
document.querySelector("body").prepend(heading);
// div.before(heading);

//delete any node
p.remove();