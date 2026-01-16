console.log("home.js file was exported");

// create elements
const article = document.createElement("article");
const h2 = document.createElement("h2");
const p = document.createElement("p");

// append to article
article.append(h2, p);
