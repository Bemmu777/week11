const myButton = document.querySelector("button");
const mybox = document.querySelector(".box");

const colors = ["red", "green", "blue", "yellow", "purple"];

myButton.addEventListener("click", changeColor);

function changeColor() {
    console.log("Button clicked!");
    let randomIndex = Math.floor(Math.random() * colors.length);
    mybox.style.backgroundColor = colors[randomIndex];
}