// fetch elements
export default function homeScreen() {
  console.log("home.js file was exported");

  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  // add content
  h2.textContent = "Home Page";
  p.textContent =
    "This is the Home Page and this is a test to see if it works!";
  article.append(h2, p);

  return article;
}
