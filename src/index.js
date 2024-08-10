import homeLoad from "./home";
import menuLoad from "./menu";
import aboutLoad from "./about";

const contentContainer = document.querySelector("#content");
const navButtons = document.querySelectorAll("nav button");

function registerEventListeners() {
  navButtons.forEach((btn) => {
    btn.addEventListener("click", switchTab);
  });
}

function switchTab(event) {
  contentContainer.removeChild(contentContainer.firstChild);

  switch (event.target.id) {
    case "home":
      homeLoad();
      break;
    case "menu":
      menuLoad();
      break;
    case "about":
      aboutLoad();
      break;
    default:
      console.log("This button is not supported yet");
      break;
  }
}

registerEventListeners();
homeLoad();
