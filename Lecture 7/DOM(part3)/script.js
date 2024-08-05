let div=document.querySelector("div");
console.log(div);
let p=document.querySelector("p")
console.log(p);

// how to access attributes in javascript 

// attribute present inside div 
let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

// attribute present inside p 
console.log(p.getAttribute("class"));

// how to change attributes name through javascript 
console.log(p.setAttribute("class","newClass"));

//how to access style in js
console.log(div.style);
div.style.backgroundColor="cyan";
div.style.fontSize="23px";
div.innerText="Pakistan";





