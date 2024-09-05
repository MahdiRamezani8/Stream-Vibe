import "core-js/stable";
import "regenerator-runtime/runtime";
import { footerLists } from "../config";
import NavView from "../views/sectionsView/navView";
import FooterView from "../views/sectionsView/footerView";

function init() {
  // appending elements:
  NavView.render();
  FooterView.render(footerLists);
}

init();
