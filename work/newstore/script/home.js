let api = "https://resta.onrender.com/categories";
let cart_arr = [];
let main = document.getElementById("main");

import nav from "./navbar.js";

let navbarHTML = nav();
document.getElementById("navbar").innerHTML = navbarHTML;


async function getData()
{
    let response = await fetch(api);
    let data = await response.json();
    return data;
}

console.log(getData());
getData().then((data) => {
  console.log(data); // Log the data to see its structure
  display(data); // Call the display function with the fetched data
});


function display(data){
    main.innerHTML="";

    data.forEach(element => {
        let div = document.createElement("div");
        div.setAttribute('id','dish');
       let name=document.createElement("h3");
        name.innerText=element.name;
        let img= document.createElement("img");
        img.src=element.img;
        let description= document.createElement("p");
        description.innerText=element.description;
        let reciepe= document.createElement("p");
        reciepe.innerText="Reciepe: "+element.recipe;

        let price=document.createElement("p");
        price.innerHTML=element.price;

        let button= document.createElement("button");
        button.innerText="Add to Cart";
        button.addEventListener("click",function(){

            addToCart(element);
        });
        div.append(name,img,description,reciepe,price,button);
        main.append(div);




    });

//


}

function addToCart(data) {
  alert("prodcut is add to cart");

  cart_arr.push(data);
  localStorage.setItem("cart_data", JSON.stringify(cart_arr));
  // console.log(data)
  // console.log("fsd")
}




