 let checkout = document.getElementById("order-form");

 checkout.addEventListener("submit", function(event) {
    
    event.preventDefault();
    setTimeout(() => {
            alert("Your order is accepted");
        }, 0);

        setTimeout(() => {
            alert("Your order is being prepared");
        }, 3000);

        setTimeout(() => {
            alert("Your order is being packed");
        }, 8000);

        setTimeout(() => {
            alert("Your order is out for delivery");
        }, 10000);

        setTimeout(() => {
            alert("Order delivered");

        }, 12000);




});





