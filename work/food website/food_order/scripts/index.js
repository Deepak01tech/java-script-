// Add the coffee to local storage with key "coffee"
let api = "https://resta.onrender.com/categories";

let main = document.getElementById("main");

async function fetchProducts() {
  let response = await fetch(api);
  let data = await response.json();
  return data;
  
}

fetchProducts().then((data) => {
  display(data);
});

function display(data) {
  main.innerHTML = "";
  data.forEach(function (el) {
    let div = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = el.name;
    let image = document.createElement("img");
    image.src = el.img;
    let descrip = document.createElement("p");
    descrip.innerText = el.description;
    let price = document.createElement("p");
    price.innerText = "Price: " + el.price;
    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
        alert("added to bucket");
      addToCart(el);
    });
    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(descrip);
    div.appendChild(price);
    div.appendChild(btn)
    main.appendChild(div);
  });
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}
