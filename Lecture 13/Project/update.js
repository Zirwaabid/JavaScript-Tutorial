// -- Add this URL to the BASE_URL => https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies
// -- Update this section of the code as below:
// const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
//    let response = await fetch(URL);
//    let data = await response.json();
//    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
//    let finalAmount = amtVal * rate;
//    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;