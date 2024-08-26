const URL = "https://cat-fact.herokuapp.com/facts";
let button = document.querySelector(".button")
let para = document.querySelector(".factPara")


// fetch api through async await 
const getFacts = async () => {
    console.log("getting data.....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    para.innerText=data[4].text;
}

// fetch api through promise chaining
function getFacts() {
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        para.innerText = data[4].text;
    })
}
button.addEventListener("click", getFacts)
