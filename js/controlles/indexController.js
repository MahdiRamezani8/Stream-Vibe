import "core-js/stable";
import "regenerator-runtime/runtime";
import NavView from "../views/sectionsView/navView";
import GenreSplideView from "../views/sectionsView/genreSplideView";
import DevicesView from "../views/indexViews/devicesView";
import { devices } from "../config";

function init() {
  // appending elements:
  GenreSplideView.render();
  NavView.render();
  DevicesView.render(devices);
}

init();
