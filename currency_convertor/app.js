const BASE_URL= "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_mgP7WU9BvZ4ZbPaWYbbpNf5OebLewMAXhtNf6QUG&currencies=";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const frmCurr= document.querySelector(".from select");
const toCurr= document.querySelector(".to select");
const msg= document.querySelector(".msg");

const updateExchnageRate = async() =>{
let amount=document.querySelector(".amount input");
     let amtVal=amount.value;
     if(amtVal==""|| amtVal<1){
            alert("Please enter a valid amount");
            amtVal=1;
            amount.value="1";
     }

     const URL=`${BASE_URL}${toCurr.value}&base_currency=${frmCurr.value}`;
       const response= await fetch(URL);
       let data= await response.json();
       let rate= data.data[toCurr.value];
        let finalAmt= amtVal * rate;
        msg.innerText=`${amtVal} ${frmCurr.value} = ${finalAmt.toFixed(2)} ${toCurr.value}`;
};

// Move function definition up
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.value = currCode;
        newOption.innerText = currCode;

        if(select.name==="from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name==="to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }


    select.addEventListener("change", e => {
        updateFlag(e.target);
    });
}

btn.addEventListener("click", e => {
     e.preventDefault();
    updateExchnageRate();
     
});

window.addEventListener("load", () => {
  updateExchnageRate();
});