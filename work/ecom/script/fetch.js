let main = document.getElementById("main");
let cart_arr = JSON.parse(localStorage.getItem("cart_data")) || [];

async function getData(api)
{
  let response = await fetch(api)

  let data = await response.json();
  return data;

}

function display(data)
{
  main.innerHTML = "";
  data.map((el, index) => {
    let div = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText = "Price: " + el.price;
    let img = document.createElement("img");
    img.src = el.image;
    let button = document.createElement("button");
    button.innerText = "addtocart";
    button.addEventListener("click", function (event) {
     // event.stopPropagation(); // Prevent triggering the parent click event
      addtocart(el);
    });
     div.append(img,title,price,button);
     main.appendChild(div);

    });

}

let flag;
function addtocart(el)
{
  flag=false;
  cart_arr.map((item)=> {
    if(item.id===el.id){
      flag=true;
      return;

    }
    else{
      flag=false;
      return;

    }

  });

  if(flag)
  {
    alert("Item already in cart");

  } else{
    cart_arr.push(el);
    localStorage.setItem("cart_data", JSON.stringify(cart_arr));
    alert("Item added to cart");
  }
}
export{getData,display};

