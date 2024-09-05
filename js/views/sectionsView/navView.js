import View from "../view";
import icons from "url:../../../icons/icons.svg";
import logo from "url:../../../images/mobile/logo.svg";

class NavView extends View {
  _markup = `<nav class="grid nav nav--mb">
      <img src="${logo}" alt="StramVibe" />
      <button>
        <svg width="24" height="24">
          <use href="${icons}#nav"></use>
        </svg>
      </button>
    </nav>

   <!-- Navbar is the same in Laptop and Desktop !-->
    <nav class="grid nav nav--lt">
      <img src="${logo}" alt="StramVibe" />

      <ul class="nav__list">
        <li class="nav__list__item nav__list__item--active">
          <a href="#">home</a>
        </li>
        <li class="nav__list__item"><a href="#">movies & shows</a></li>
        <li class="nav__list__item"><a href="#">support</a></li>
      </ul>

      <span>
        <button class="btn-search">
          <svg width="24" height="24">
            <use href="${icons}#search"></use>
          </svg>
        </button>
        <button>
          <svg width="24" height="24">
            <use href="${icons}#bell"></use>
          </svg>
        </button>
      </span>
    </nav>`;

  render() {
    this.appendToDom(document.body, this._markup, "afterbegin");
    this._intersectionObserevrHandler();
  }

  _intersectionObserevrHandler() {
    const headerEl = document.querySelector(".header");
    if (!headerEl) return;
    const navEls = document.querySelectorAll(".nav");

    function obsereveCallback([entry]) {
      if (!entry.isIntersecting)
        navEls.forEach((el) => el.classList.add("active"));
      else navEls.forEach((el) => el.classList.remove("active"));
    }

    const observerOptoins = {
      root: null,
      threshold: 0.5,
    };

    const headerObserevr = new IntersectionObserver(
      obsereveCallback,
      observerOptoins
    );

    headerObserevr.observe(headerEl);
  }
}

export default new NavView();
