// Initial page load
import "./style.css";
import Food from "./food.jpg";

export default function initialPageLoad() {
  const contentContainer = document.querySelector("#content");

  // Add the h1
  const headline = document.createElement("h1");
  headline.textContent = "My very own restaurant";
  contentContainer.appendChild(headline);

  // Add the food image
  const myFood = new Image();
  myFood.src = Food;
  contentContainer.appendChild(myFood);

  // Add some text
  const someText = document.createElement("p");
  someText.textContent =
    "Do you see this awesome food that we make over here? Come on and give it a taste yourself.";
  contentContainer.appendChild(someText);
}
