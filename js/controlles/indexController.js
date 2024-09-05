import "core-js/stable";
import "regenerator-runtime/runtime";
import NavView from "../views/sectionsView/navView";
import GenreSplideView from "../views/sectionsView/genreSplideView";
import DevicesView from "../views/indexViews/devicesView";
import { devices, FAQs, footerLists } from "../config";
import FAQsView from "../views/sectionsView/FAQsView";
import FooterView from "../views/sectionsView/footerView";

function init() {
  // appending elements:
  GenreSplideView.render();
  NavView.render();
  DevicesView.render(devices);
  FAQsView.render(FAQs);
  FooterView.render(footerLists);
}

init();
