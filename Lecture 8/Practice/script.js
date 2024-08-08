let modebtn = document.querySelector(".mode");
let body = document.querySelector("body");
// // create light and dark mode through js 
let currMode1 = "light";
modebtn.addEventListener("click", () => {
    if (currMode1 === "light") {
        currMode1 = "dark";
        body.style.backgroundColor = "black";
    }
    else {
        currMode1 = "light";
        body.style.backgroundColor = "white";
    }
    console.log(currMode1);
});

//create light and dark mode through css (create classes and add in js)nad add it in js
let currMode = "light";

modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").classList.remove("light");
        body.classList.add("dark");
    } else {
        currMode = "light";
        document.querySelector("body").classList.remove("dark");
        body.classList.add("light");
    }
    console.log(currMode);
});