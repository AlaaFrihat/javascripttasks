let Burger = { name: "Burger", price: 2.5, category: "Main", available: true };
let Shawarma = { name: "Shawarma", price: 3.5, category: "Main", available: true };
let Zinger = { name: "Zinger", price: 4.5, category: "Main", available: true };
let Botato = { name: "Botato", price: 5.5, category: "Main", available: true };
let Brosted = { name: "Brosted", price: 6.5, category: "Main", available: false };

const food = [Burger, Shawarma, Zinger, Botato, Brosted];
let name = prompt("enter your name");
function printFoodDetails(foodObj) {
    document.write("<h3>Selected Food Details:</h3>");
    for (let key in foodObj) {
    document.write(key + ": " + foodObj[key] + "<br>");
    }
}
let selectedFood = null;
function getCustomerOrder() {


    while (selectedFood === null) {
    let userInput = prompt("What do you need?");

    if (userInput === null) {
    alert("Order cancelled.");
    break;
    }

    for (let i = 0; i < food.length; i++) {   
    if (food[i].name === userInput) {
    if (food[i].available === false) {
    alert("Sorry, " + food[i].name + " is unavailable. Choose another item.");
    continue; 
    }
    selectedFood = food[i];
    break; 
    }
    }

    if (selectedFood === null && userInput !== null) {
    alert("Item not found on the menu! Please try again.");
    }
    }

    return selectedFood;
}

function final() {
let finalOrder = getCustomerOrder();

if (finalOrder != null) {
document.write("<h2>Order Successful!</h2>");

let btnSubmit=document.getElementById("btnSubmit");
   btnSubmit.onmouseout = function(){
    btnSubmit.style.color="red";
   }
btnSubmit.onmouseover = function(){
    btnSubmit.style.color="yellow";
}
btnSubmit.onclick = function () {
        document.write("Hello " +name + "Your order is");
    printFoodDetails(finalOrder);
};

} else {
document.write("<h2>No order was made.</h2>");
}
}

final();

