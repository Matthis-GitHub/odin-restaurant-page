import "./style.css";

export default function aboutLoad() {
  const contentContainer = document.querySelector("#content");

  // Create div
  const div = document.createElement("div");

  // Add the h1
  const headline = document.createElement("h1");
  headline.textContent = "About";
  div.appendChild(headline);

  // Add some text
  const someText = document.createElement("p");
  someText.textContent = "This is the about text.";
  div.appendChild(someText);

  contentContainer.appendChild(div);

  return contentContainer;
}
