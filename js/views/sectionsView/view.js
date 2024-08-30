class View {
  _prevEl;
  _nextEl;

  constructor() {}

  appendToDom(el) {
    this._prevEl.insertAdjacentHTML("afterend", el);
  }

  appendToBody(el) {
    document.body.insertAdjacentHTML("afterbegin", el);
  }
}

export default View;
