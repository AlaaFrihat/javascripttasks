let x = 532443;
function reverseNumber(x) {
    let str = String(x);
    
    let reversedStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    let reversedNum = Number(reversedStr);
    
    return reversedNum;
}

let result = reverseNumber(x);
console.log(result);
document.write("Original Number: " + x + "<br>");
document.write("Reversed Number: " + result);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let input = prompt("enter your number")
function insertDashes(numInput) {
let str = String(numInput);
let result = "";
for (let i = 0; i < str.length; i++) {
let currentNum = Number(str[i]);
let nextNum = Number(str[i + 1]);

result += str[i];

if (currentNum % 2 === 0 && nextNum % 2 === 0 && i < str.length - 1) {
result += "-"; 
}
}
return result;
}

let output = insertDashes(input);
console.log(output);
document.write("<br>Result: " + output);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Agechecker(20); 
Agechecker(15); 

function Agechecker(age) {
    if (age >= 18) {
    console.log("The user is Adult");
    document.write("<br>The user is Adult");
    } else {
    console.log("The user is Minor");
    document.write("<br>The user is Minor");
    }
}
