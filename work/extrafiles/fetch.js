  let main = document.getElementById("main");
  let Fillll = document.getElementById("filter");
  let search = document.getElementById("search");



let api = "https://fakestoreapi.com/products";


let actual_data;

async function getData()
{
    let response = await fetch(api);
    data = await response.json();
    actual_data = data;
    displayData(data);
}

getData();

function  displayData(a)
{
    main.innerHTML = "";
    // a.forEach(element => {
    //     let div = document.createElement("div");
    //     div.className = "card";


    a.map(function(el,index)
{
    let div = document.createElement("div");
     let title = document.createElement("h1");
     title.innerText= el.title;
     let price = document.createElement("p");
     price.innerText = "Price: $" + el.price;
     let img = document.createElement("img");
     img.src = el.image;
      div.appendChild(img);
     div.appendChild(title);
     div.appendChild(price);

     main.appendChild(div);


})


}

Fillll.addEventListener("change",Pricefil)

function Pricefil()
{
    let val = Fillll.value;
    if(val === "LTH")
    {
        actual_data.sort(function(a,b)
    {
        return a.price - b.price;
    })
    }
    else if(val === "HTL")
    {
        actual_data.sort(function(a,b)
        {
            return b.price - a.price;
        })

    }


    // let filtered_data = actual_data.filter(el => el.price <= val);
    displayData(actual_data);
}

search.addEventListener("input",searchfill)
 function searchfill()
 {
     let val = search.value.toLowerCase();
     let filtered_data = actual_data.filter(el => el.title.toLowerCase().includes(val));
     displayData(filtered_data);
 }