import nav from "./navbar.js";
let navbar = document.getElementById("navbar");


nav();
navbar.innerHTML= nav();

/*-----------------------------------------------------------------------------*/
let api = "https://fakestoreapi.com/products";
import { getData,display } from "../script/fetch.js";

let a = await getData(api);

display(a);