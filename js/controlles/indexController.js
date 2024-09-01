import "core-js/stable";
import "regenerator-runtime/runtime";
import navView from "../views/sectionsView/navView";
import genreSplideView from "../views/sectionsView/genreSplideView";

function init() {
  // appending elements:
  navView.appendToDom(document.body, navView.markup, "afterbegin");
  genreSplideView.render(genreSplideView.markup);
}

init();
