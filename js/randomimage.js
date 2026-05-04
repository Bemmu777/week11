const mybutton = document.querySelector("button");
const image = document.querySelector("img");
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];

mybutton.addEventListener("click", changeImage);

function changeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    image.src = "img/"+images[randomIndex];
}