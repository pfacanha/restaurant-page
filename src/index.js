import "./styles.css";
import homeScreen from "./home.js";
import aboutScreen from "./about.js";

console.log("index.js was loaded");

const content = document.querySelector("#content");
content.appendChild(homeScreen());
