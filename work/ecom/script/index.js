import nav from "./navbar.js";
let navbar = document.getElementById("navbar");


nav();
navbar.innerHTML= nav();

/*-----------------------------------------------------------------------------*/
let api = "https://fakestoreapi.com/products";
let main = document.getElementById("main");

// Fetch data from API
async function getData() {
  let response = await fetch(api);
  let data = await response.json();
  return data;
}

// Display data in the UI
function display(data) {
  main.innerHTML = "";
  data.map((el, index) => {
    let div = document.createElement("div");
    let divv = document.createElement("div");
    div.addEventListener("click", function () {
      single(el);
    });

    let title = document.createElement("h1");
    title.innerText = el.title;

    let price = document.createElement("h3");
    price.innerText = "Price: " + el.price;

    let img = document.createElement("img");
    img.src = el.image;

    let button = document.createElement("button");
    button.innerText = "addtocart";
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent triggering the parent click event
      addtocart(el);
    });

    div.append(img, title, price);
    divv.append(div, button);

    main.appendChild(divv);
  });
}

// Store a single item in localStorage and navigate to detail page
function single(a) {
  localStorage.setItem("item", JSON.stringify(a));
  window.location.href = "detail.html";
}

// Add item to cart and store in localStorage
function addtocart(b) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!Array.isArray(cart)) {
    cart = []; // Ensure cart is an array
  }
  cart.push(b);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart");
  window.location.href = "../html/cart.html";
}

export { getData, display };

// Initialize and display the products
getData().then((data) => display(data));






