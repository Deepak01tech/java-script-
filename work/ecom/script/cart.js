let navbar = document.getElementById("navbar");

let login_data = JSON.parse(localStorage.getItem("loginData"));
//import { display } from "./fetch";
import nav from "./navbar.js";

nav(); // Call the navigation function

navbar.innerHTML = nav();

let main = document.getElementById("main");
 let cart_data = JSON.parse(localStorage.getItem("cart_data"));
 display(cart_data);

 function display(data)
 {
    main.innerHTML=" ";
    data.map((el, index) => {
        let div = document.createElement("div");
        let title = document.createElement("h1");
        title.innerText = el.title;
        let price = document.createElement("h3");
        price.innerText = "Price: " + el.price;
        let img = document.createElement("img");
        img.src = el.image;
        let button = document.createElement("button");
        button.innerText="delete";
        let buttonadd=document.createElement("button");
        buttonadd.innerText="add";
        buttonadd.addEventListener("click", function(event) {
            //event.stopPropagation();
            addItem(index);
        });

        let buttonminus= document.createElement("button");
        buttonminus.innerText=" del";
        buttonminus.addEventListener("click", function(event) {
            //event.stopPropagation();
            minusItem(index);
        });

        button.addEventListener("click", function(event) {
            //event.stopPropagation();
            deleteItem(index);
        });
        div.append(img.title,price,button,buttonadd,buttonminus);
        main.append(div);
        });

 }

 function deleteItem(index)
 {
    let cart_data = JSON.parse(localStorage.getItem("cart_data"));
    cart_data.splice(index, 1);
    localStorage.setItem("cart_data", JSON.stringify(cart_data));
    display(cart_data);
 }