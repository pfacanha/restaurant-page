import "./styles.css";
import { container } from "./home.js";

console.log("index.js was loaded");

const content = document.querySelector("#content");
content.appendChild(container());
