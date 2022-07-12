import { Router } from "./js/router.js"
import Events from "./js/events.js"
import {
  homeButton,
  universeButton,
  exploreButton,
  backgroundImage
} from "./js/elements.js"

const router = new Router();

const events = Events({backgroundImage});

router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/explore", "/pages/explore.html");
router.add("/404", "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

homeButton.addEventListener('click', function() {
  events.changeBackgroundImage("./images/home.png");
})

universeButton.addEventListener('click', function() {
  events.changeBackgroundImage("./images/universe.png");
})

exploreButton.addEventListener('click', function() {
  events.changeBackgroundImage("./images/explore.png");
})