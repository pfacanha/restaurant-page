export default function loadAbout() {
  console.log("about.js file was exported");

  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  // add content
  h2.textContent = "About Page";
  p.textContent = "This is the About Page and I'm testing to see if it works!";
  article.append(h2, p);

  return article;
}
