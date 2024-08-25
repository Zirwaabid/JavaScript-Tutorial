const URL = "https://cat-fact.herokuapp.com/facts";
let button = document.querySelector(".button")
let factpara = document.querySelector(".factPara")



const getFacts = async () => {
    console.log("getting data.....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText = data[1].text;
    
}
button.addEventListener("click",getFacts);