let backgroungInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");

let button = document.getElementById("customButton");

function applyHere() {
    button.style.backgroundColor = backgroungInputEl.value;
    button.style.color = fontColorInputEl.value;
    button.style.fontSize = parseInt(fontSizeInputEl.value) + "px";
    button.style.fontWeight = parseInt(fontWeightInputEl.value);
    button.style.padding = parseInt(paddingInputEl.value) + "px";
    button.style.borderRadius = parseInt(borderRadiusInputEl.value) + "px";

}
