import "./styles.css";
import homeScreen from "./home.js";
import aboutScreen from "./about.js";

console.log("index.js was loaded");

const content = document.querySelector("#content");
content.appendChild(homeScreen());

// add event listener if about.js page is clicked
const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  console.log(`${aboutBtn.textContent} page was clicked!`);
});
