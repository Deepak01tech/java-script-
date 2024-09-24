function nav() {
   if (login_data != null) {
     return `
        <div id="nav">
        <a href="../html/index.html">Home</a>
        <a href="../html/Electronic.html">Elelctric</a>
        <a href="../html/Jwellery.html">Jwellery</a>
        <div id="nav2">
         <a href="../html/cart.html">Cart</a>
        <a href="#">Hello, ${login_data.name}</a>
        <a href="../html/logout.html">Logout</a>
        </div>
        `;
   } else {
     return `
       <div id="nav">
        <a href="../html/index.html">Home</a>
        <a href="../html/Electronic.html">Elelctric</a>
        <a href="../html/Jwellery.html">Jwellery</a>
        <div id="nav2">
        <a href="../html/login.html">Login/signup</a>
        </div>
    `;
   }
}

export default nav;
