
let signup_arr = JSON.parse(localStorage.getItem("signupData"));
let form = document.getElementById("form");

form.addEventListener("submit", detail);
function detail(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let login_obj= {
        name: name,
        email: email,
        password: password
    }

    let flag=false;

    signupData.map((el)=> {
        if(el.email===login_obj.email){
            flag=true;
            if(el.password==login_obj.password)
            {
                alert("Login Successful");
                return;
            }else
            {
                alert("Incorrect Password");
                return;
            }
        }



    })
    if(flag){
        alert("login successful!");
        window.location.href="../html/index.html";
    } else{
        alert("Email does not exist !");
    }







}
