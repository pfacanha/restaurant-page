import "./styles.css";
import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

console.log("index.js was loaded");

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const contactBtn = document.querySelector(".contact");

content.appendChild(loadHome());

// menu bar event handlers
homeBtn.addEventListener("click", (e) => {
  console.log("Home tab was clicked!");
  handleClick(e, loadHome);
});
aboutBtn.addEventListener("click", (e) => {
  console.log("About tab was clicked!");

  handleClick(e, loadAbout);
});
contactBtn.addEventListener("click", (e) => {
  console.log("Contact tab was clicked!");

  handleClick(e, loadContact);
});

function handleClick(e, func) {
  e.preventDefault();

  content.textContent = "";
  content.appendChild(func());
}
