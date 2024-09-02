import View from "../view";
import icons from "../../../icons/icons.svg";

class DevicesView extends View {
  render(devices) {
    const generatedMarkup = this._generateMarkup(devices);
    this.appendToDom(
      document.querySelector(".devices__list"),
      generatedMarkup,
      "beforeend"
    );
  }

  _generateMarkup(devices) {
    return devices
      .map((device) => {
        return `
        <li class="devices__list__item">
            <header class="devices__list__item__head">
            <span>
                <svg width="24" height="24">
                <use href="${icons}#${device.icon}"></use>
                </svg>
            </span>
            <h3>
                ${device.device}
            </h3>
            </header>
            <footer class="devices__list__item__foot">
            <p>${device.caption}</p>
            </footer>
        </li>
    `;
      })
      .join("");
  }
}

export default new DevicesView();
