import "./styles.css";
import { homeScreen } from "./home.js";

console.log("index.js was loaded");

const content = document.querySelector("#content");
content.appendChild(homeScreen());
