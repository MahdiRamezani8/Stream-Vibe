import "core-js/stable";
import "regenerator-runtime/runtime";
import navView from "../views/sectionsView/navView";
import genreSplideView from "../views/sectionsView/genreSplideView";

function init() {
  // appending elements:
  genreSplideView.render();
  navView.render();
}

init();
