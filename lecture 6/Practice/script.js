// add new string to h2
let heading = document.querySelector("h2");
heading.innerText = heading.innerText + " from Apna College students";

// add something new in each div 
// let dives=document.querySelectorAll("div");
// dives[0].innerText="new value 1";
// dives[1].innerText="new value 2";
// dives[2].innerText="new value 3;

// perform same task through loop (professional way)
let dives=document.querySelectorAll("div");
let index=1;
for (const div of dives) {
    div.innerText=`new value ${index}`
    index++
}





