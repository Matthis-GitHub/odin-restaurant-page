import "./style.css";

export default function menuLoad() {
  const contentContainer = document.querySelector("#content");

  // Create div
  const div = document.createElement("div");

  // Add the h1
  const headline = document.createElement("h1");
  headline.textContent = "Have a look at our fantastic menu.";
  div.appendChild(headline);

  // Add some text
  const someText = document.createElement("p");
  someText.textContent = "Everything looks so yummy!";
  div.appendChild(someText);

  contentContainer.appendChild(div);

  return contentContainer;
}
