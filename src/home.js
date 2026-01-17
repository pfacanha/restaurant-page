// fetch elements
export default function homeScreen() {
  console.log("home.js file was exported");

  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  // add content
  h2.textContent = "Home Page";
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum lorem turpis. Integer ornare ac sapien ut feugiat. Fusce convallis exut dui volutpat, vitae mollis neque laoreet.";
  article.append(h2, p);

  return article;
}
