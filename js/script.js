// DONATE BUTTON CLICK MESSAGE

const donateButtons = document.querySelectorAll(".donate-btn");

donateButtons.forEach(btn => {
btn.addEventListener("click", () => {

let user = localStorage.getItem("loggedInUser");

if(!user){

alert("Please login first to donate!");
window.location.href="login.html";
return;

}

alert("Donation feature will be added with backend!");

});
});


// QUICK AMOUNT BUTTONS FUNCTION

function setAmount(value){
document.querySelector("input[type='number']").value = value;
}

function goToPayment(){
window.location.href="payment.html";
}


// LOGIN CHECK FUNCTION (FOR CREATE CAMPAIGN)

function checkLogin(){

let user = localStorage.getItem("loggedInUser");

if(!user){

alert("Please login first!");
window.location.href="login.html";
return false;

}

return true;

}
