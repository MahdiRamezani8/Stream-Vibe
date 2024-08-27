import "core-js/stable";
import "regenerator-runtime/runtime";
import navView from "../views/sectionsView/navView";
import headerView from "../views/indexViews/headerView";

function init() {
  // appending elements:
  navView.appendToDom(navView.markup);
  headerView.appendToDom(headerView.markup);
}

init();
