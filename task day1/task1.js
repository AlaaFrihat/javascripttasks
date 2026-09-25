let name = prompt("your name");
console.log(name);
let age = prompt("your age");
console.log(age);
let gender = prompt("male/female");
if (gender === "male"){
    console.log("Welcome Mr."+ name);
}else if (gender === "female"){
    console.log("Welcome Ms. "+ name);
}else { console.log("Welcome "+ name)};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

if (age < 16){
console.log( "You are not eligible to place an order");
}
else if (age >= 16){
    console.log("Continue with the order");
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

let order = prompt("your order:(Burger,Shawarma,Zinger)");
let isAvailable = (false);
if (order=== "Burger"||order==="Shawarma"||order==="Zinger"){
    isAvailable = (true); alert("Your order is being prepared")
}
else{
    isAvailable = (false); alert("Invalid order. Please try again")
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

let orderstaus = (order === "Burger" || order === "Shawarma" || order === "Zinger");

if (age >=18 && orderstaus ){
    console.log("Order confirmed");
} else if (age<18 && !orderstaus ){
    console.log("Order requires verification")
}
else {alert("Order requires verification"); 
orderstaus ="Order requires verification";
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
document.write("<h2>Summary</h2>");
document.write("<p><strong>Customer Name:</strong> " + name + "</p>");
document.write("<p><strong>Age:</strong> " + age + "</p>");
document.write("<p><strong>Gender:</strong> " + gender + "</p>");
document.write("<p><strong>Order:</strong> " + order + "</p>");
document.write("<p><strong>Order Status:</strong> " + orderstaus + "</p>");