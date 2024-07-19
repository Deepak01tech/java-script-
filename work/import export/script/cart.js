// Retrieve cart data from localStorage or initialize an empty array if no data is found
let cart_arr = JSON.parse(localStorage.getItem("cart")) || [];
display(cart_arr);

// Retrieve login data from localStorage
let login_data = JSON.parse(localStorage.getItem("login_data"));

// Select the login element in the DOM
let log = document.getElementById("login");

// If the user is logged in, display their name, a cart link, and a logout button
if (login_data !== null) {
  log.innerHTML = null;
  let name = document.createElement("h3");
  name.innerText = login_data.name;

  let cartLink = document.createElement("a");
  cartLink.href = "./cart.html";
  cartLink.innerText = "Cart";

  let logout = document.createElement("button");
  logout.innerText = "Logout";
  logout.addEventListener("click", logoutfun);

  log.append(name, cartLink, logout);
}

// Logout function to remove login data from localStorage and redirect to login page
function logoutfun() {
  localStorage.removeItem("login_data");
  window.location.href = "./login.html";
}

// Display function to render cart items in the UI
function display(data) {
  let main = document.getElementById("main");
  main.innerHTML = ""; // Clear the main element before appending new items

  data.map(function (el, index) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image; // Ensure the correct property name is used

    let nam = document.createElement("h1");
    nam.textContent = el.title; // Ensure the correct property name is used

    let price = document.createElement("h3");
    price.textContent = "Price: " + el.price;

    let delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.addEventListener("click", function () {
      delfun(index);
    });

    div.append(img, nam, price, delButton);
    main.append(div);
  });
}

// Delete function to remove items from cart and update localStorage
function delfun(item) {
  cart_arr.splice(item, 1);
  localStorage.setItem("cart", JSON.stringify(cart_arr));
  display(cart_arr);
}
