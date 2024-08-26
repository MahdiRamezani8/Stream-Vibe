class View {
  body = document.body;

  constructor() {}

  appendToDom(el) {
    this.body.insertAdjacentHTML("beforeend", el)
  }
}

export default View;