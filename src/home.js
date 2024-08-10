// Initial page load
import "./style.css";
import Food from "./food.jpg";

export default function homeLoad() {
  const contentContainer = document.querySelector("#content");

  // Create div
  const div = document.createElement("div");

  // Add the h1
  const headline = document.createElement("h1");
  headline.textContent = "My very own restaurant";
  div.appendChild(headline);

  // Add the food image
  const myFood = new Image();
  myFood.src = Food;
  div.appendChild(myFood);

  // Add some text
  const someText = document.createElement("p");
  someText.textContent =
    "Do you see this awesome food that we make over here? Come on and give it a taste yourself.";
  div.appendChild(someText);

  contentContainer.appendChild(div);

  return contentContainer;
}
