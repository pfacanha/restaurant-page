const message = console.log("home.js file was exported");

// fetch elements
function container() {
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  article.append(h2, p);

  return article;
}

export { container, message };
