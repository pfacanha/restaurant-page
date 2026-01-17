import "./styles.css";
import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

console.log("index.js was loaded");

const content = document.querySelector("#content");
const aboutBtn = document.querySelector(".about");
const contactBtn = document.querySelector(".about");

content.appendChild(loadHome());
aboutBtn.addEventListener("click", handleClick(e, loadAbout));
contactBtn.addEventListener("click", handleClick(e, loadContact));

function handleClick(event, func) {
  event.preventDefault();

  content.textContent = "";
  content.appendChild(func());
}
