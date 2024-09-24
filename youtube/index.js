let you = document.getElementById("youtube-container");
let api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA4-pE-cyui8jWGz_wRT5uDuVrjyqhDAY4";

let search = document.getElementById("search-input");

// Function to search for a video
search.addEventListener("input",()=>{


  setTimeout(getData,2000 );

})




async function getData() {

 you.innerHTML="";
  let res = await fetch(`${api}&q= ${search.value} `);

  let data = await res.json();


  let real_data = data.items;


 display(real_data);
}

function display(data) {
  you.innerHTML = "";


  data.map(({ snippet: { title }, id: { videoId } }) => {


    let div = document.createElement("div");
    let obj={
      id:videoId,
      title:title
    }
     div.addEventListener("click",()=>{
      localStorage.setItem("id",JSON.stringify(obj));
      window.location.href="./new.html";
     })
    let iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${videoId} `;

    let name = document.createElement("h3");
    name.innerText = title;

    div.append(iframe, name);

    you.append(div);
  });
}