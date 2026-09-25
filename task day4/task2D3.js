let text = document.getElementById("text");
let fontFamily = document.getElementById("fontFamily");
let fontSize = document.getElementById("fontSize");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");


fontFamily.onclick = function () {
    text.style.fontFamily = fontFamily.value;
};

fontSize.onclick = function () {
    text.style.fontSize = fontSize.value;
};

bold.onclick = function () {

    if (bold.checked) {
        text.style.fontWeight = "bold";
    } else {
        text.style.fontWeight = "normal";
    }
};

italic.onclick = function () {

    if (italic.checked) {
        text.style.fontStyle = "italic";
    } else {
        text.style.fontStyle = "normal";
    }

};

underline.onclick = function () {

    if (underline.checked) {
        text.style.textDecoration = "underline";
    } else {
        text.style.textDecoration = "none";
    }

};