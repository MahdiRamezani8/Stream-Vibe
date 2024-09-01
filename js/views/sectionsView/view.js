class View {
  constructor() {}

  appendToDom(parent, el, position) {
    parent.insertAdjacentHTML(position, el);
  }
}

export default View;
