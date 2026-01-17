export default function contactScreen() {
  console.log("about.js file was exported");

  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  // add content
  h2.textContent = "Contact Page";
  p.textContent =
    "This is the Contact Page and I'm testing to see if it works!";
  article.append(h2, p);

  return article;
}
