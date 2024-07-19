let signup_arr=[];

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    let form_obj={
        name: name,
        email: email,
        password: password,

    } ;

    signup_arr.push(form_obj);
    localStorage.setItem("signupData",JSON.stringify(signup_arr));
   // console.log(signup_arr);

   
}
);
