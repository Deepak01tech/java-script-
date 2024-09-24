
let cartcontainer = document.getElementById("main");
let bucket = JSON.parse(localStorage.getItem("cart")) || [];
display(bucket);

function display(bucket) {
  cartcontainer.innerHTML = "";
  bucket.forEach((el, index) => {
    let div = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = el.name;
    let image = document.createElement("img");
    image.src = el.img;
    let descrip = document.createElement("p");
    descrip.innerText = el.description;
    let price = document.createElement("p");
    price.innerText = "Price: " + el.price;
    let btnCheckout = document.createElement("button");
    btnCheckout.innerText = "checkout";
    btnCheckout.addEventListener("click", function () {
      alert("checkout");
      checkout(el);
    });
    let btnRemove = document.createElement("button");
    btnRemove.innerText = "Remove";
    btnRemove.addEventListener("click", function () {
      removeItem(index);
    });
    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(descrip);
    div.appendChild(price);
    div.appendChild(btnCheckout);
    div.appendChild(btnRemove);
    cartcontainer.appendChild(div);
  });
}

function removeItem(index) {
  bucket.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(bucket));
  display(bucket);
}

function checkout(item) {
    alert("You have checkout " + item.name);
    window.location.href = "../checkout.html";


}
