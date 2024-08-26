import "core-js/stable";
import "regenerator-runtime/runtime";
import navView from "../views/sectionsView/navView";

function init() {
  // appending elements:
  navView.appendToDom(navView.markup);
}

init();
