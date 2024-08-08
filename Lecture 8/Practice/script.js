let modebtn=document.querySelector(".mode");
let currMode="light";
modebtn.addEventListener("click",()=>{
   if (currMode==="light") {
    currMode="dark";
   } else {
    currMode="light";
   }
});