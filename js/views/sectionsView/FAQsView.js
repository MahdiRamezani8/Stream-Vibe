import View from "../view";
import icons from "../../../icons/icons.svg";

class FAQsView extends View {
  _parentEl = document.querySelector(".FAQs__list");

  render(FAQs) {
    const generatedMarkup = this._generateMarkup(FAQs);
    this.appendToDom(this._parentEl, generatedMarkup, "beforeend");
    this._eventListener();
  }

  _eventListener() {
    this._parentEl.addEventListener("click", (e) =>
      this._showAnswer.call(this, e)
    );
  }

  _showAnswer({ target }) {
    if (!target) return;

    const userTarget = target.closest(".FAQs__list__item");
    const openItem = this._parentEl.querySelector(".FAQs__list__item.open");

    // If there is already an open item, close it (if it's not the clicked one)
    if (openItem && openItem !== userTarget) openItem.classList.remove("open");

    // Toggle the clicked item
    if (userTarget !== openItem) userTarget.classList.add("open");
    else userTarget.classList.toggle("open");
  }

  _generateMarkup(FAQs) {
    return FAQs.map(
      (FAQ, i) => `
      <li class="FAQs__list__item">
        <header class="FAQs__list__item_Q">
          <span>${(i + 1).toString().padStart(2, "0")}</span>
          <h4>${FAQ.question}</h4>
          <button class="btn btn--transparent">
            <svg class="minus" width="18" height="18" fill="white">
              <use href="${icons}#minus"></use>
            </svg>
            <svg class="plus" width="18" height="18" fill="white">
              <use href="${icons}#plus"></use>
            </svg>
          </button>
        </header>
        <footer class="FAQs__list__item_A">
          <p>${FAQ.answer}</p>
        </footer>
      </li>
            `
    ).join("");
  }
}

export default new FAQsView();
