const message = console.log("home.js file was exported");

// fetch elements
const content = document.querySelector("#content");

// create elements
const article = document.createElement("article");
const h2 = document.createElement("h2");
const p = document.createElement("p");

article.append(h2, p);
content.appendChild(article);

export { content, message };
