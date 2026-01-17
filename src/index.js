import "./styles.css";
import homeScreen from "./home.js";
import aboutScreen from "./about.js";
import contactScreen from "./contact.js";

console.log("index.js was loaded");

const content = document.querySelector("#content");
const aboutBtn = document.querySelector(".about");
const contactBtn = document.querySelector(".about");

function handleClick(event, func) {
  event.preventDefault();

  content.textContent = "";
  content.appendChild(func());
}

content.appendChild(homeScreen());
aboutBtn.addEventListener("click", handleClick(e, aboutScreen));
contactBtn.addEventListener("click", handleClick(e, contactScreen));
