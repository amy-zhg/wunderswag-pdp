// Add to cart functionality
let plusBtn = document.getElementById("plus-icon");
let minusBtn = document.getElementById("minus-icon");
let displayQty = document.getElementById("quantity-value");

let qtyValue = 1;
plusBtn.addEventListener("click", function () {
  qtyValue++;
  displayQty.innerHTML = qtyValue;
});

minusBtn.addEventListener("click", function () {
  qtyValue--;
  if (qtyValue < 0) {
    qtyValue = 0;
  }
  displayQty.innerHTML = qtyValue;
});

let addToCartBtn = document.querySelector(".add-to-cart-btn");
let cartQty = document.getElementById("cart-qty");
let sum = 0;
let cartArray = [];

function addItems() {
  let num = qtyValue;
  cartArray.push(num);
  console.log(cartArray);
  sum = sum + num;
  console.log(sum);
  cartQty.innerHTML = sum;
}

addToCartBtn.addEventListener("click", addItems);

// Set variables
const colorSwatch = document.querySelectorAll(".swatch");
const thumbnail = document.getElementsByClassName("sec");

// Set big image to be the same as 1st thumbnail image
const mainImage = document.querySelector(".main-image");
mainImage.setAttribute("src", thumbnail[0].src);

//set click event listeners for swatches
for (let i = 0; i < colorSwatch.length; i++) {
  colorSwatch[i].addEventListener("click", function () {
    changeColor(i);
    toggleColor(i);
    let current = document.getElementsByClassName("swatch active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

//set click event listeners for thumbnails
for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("click", function () {
    changeColor(i);
    toggleColor(i);
  });
}

//Set main image to corresponding thumbnail based on color swatch click
function changeColor(i) {
  document
    .querySelector(".main-image")
    .setAttribute("src", thumbnail[i].getAttribute("src"));
}

//Style color swatches on click
function toggleColor(e) {
  const item = `item-${e + 1}`;

  let prev = document.querySelector("img.active");
  prev.classList.toggle("active");
  let thumbnail2 = document.getElementsByClassName(item)[0];
  thumbnail2.classList.toggle("active");
}

// Image slider
let buttonRight = document.getElementById("slideRight");
let buttonLeft = document.getElementById("slideLeft");

let imageSlider = document.querySelector(".slider");
let sliderImg = document.querySelectorAll(".image-slider img");

var currentIndex = 0;

function renderButtons() {
  buttonLeft.style.opacity = currentIndex > 0 ? 1 : 0.5;
  buttonRight.style.opacity = currentIndex < 1 ? 1 : 0.5;
}

renderButtons();

function moveLeft() {
  currentIndex -= 1;
  document.querySelector(".image-slider").scrollLeft -= 9999;
  renderButtons();
}

function moveRight() {
  currentIndex += 1;
  document.querySelector(".image-slider").scrollLeft += 9999;
  renderButtons();
}

buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);
