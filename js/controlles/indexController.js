import "core-js/stable";
import "regenerator-runtime/runtime";
import NavView from "../views/sectionsView/navView";
import GenreSplideView from "../views/sectionsView/genreSplideView";
import DevicesView from "../views/indexViews/devicesView";
import { devices, FAQs } from "../config";
import FAQsView from "../views/sectionsView/FAQsView";

function init() {
  // appending elements:
  GenreSplideView.render();
  NavView.render();
  DevicesView.render(devices);
  FAQsView.render(FAQs);
}

init();
