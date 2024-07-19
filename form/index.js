let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

form.addEventListener("submit", function(event)
{
    event.preventDefault();


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let pwd = document.getElementById("pwd").value;
    let cpwd = document.getElementById("cpwd").value;
//    console.log(name,email,phone,pwd)


    let tr=document.createElement("tr")

    let td1=document.createElement("td")
    td1.innerText=name;
    let td2=document.createElement("td")
    td2.innerText=email;
    let td3=document.createElement("td")
    td3.innerText=phone;
    let td4=document.createElement("td")
    td4.innerText=pwd;
    let td5=document.createElement("td")
    td4.innerText=cpwd;

    tr.append(td1,td2,td3,td4,td5);

    tbody.append(tr);

})