let main = document.getElementById("main");
let cart_arr = JSON.parse(localStorage.getItem("cart_data")) || [];

async function getData(api)
{
  let response = await fetch(api)

  let data = await response.json();
}