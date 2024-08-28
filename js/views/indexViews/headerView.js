import View from "./view";
import icons from "url:../../../icons/icons.svg";
import playImg from "url:../../../images/play.svg";

class HeaderView extends View {
  _markup = `<header class="grid header">
      <div class="header__bg">
      </div>
      <div class="header__img">
        <img src="${playImg}" alt="Play" />
      </div>
      <div class="header__text">
        <h1>the best streaming experience</h1>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </p>
        <button class="btn btn--red">
          <svg width="24" height="24">
            <use href="${icons}#play"></use>
          </svg>
          start watching now
        </button>
      </div>
    </header>`;

  get markup() {
    return this._markup;
  }
}

export default new HeaderView();
