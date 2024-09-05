import View from "../view";
import icons from "../../../icons/icons.svg";

class FooterView extends View {
  render(footerLists) {
    const generatedMarkup = this._generateMarkup(footerLists);
    this.appendToDom(document.body, generatedMarkup, "beforeend");
  }

  _generateMarkup(footerLists) {
    return `
    <footer class="footer">
       <header class="footer__head">
       ${footerLists
         .map((list) => {
           return `
                <ul class="footer__head__list">
                   <li class="footer__head__list__item"><b><a href="#">${
                     list.title
                   }</a></b></li>
                    ${list.items
                      .map(
                        (item) =>
                          ` <li class="footer__head__list"><a href="#">${item}</a></li>`
                      )
                      .join("")}
                </ul>`;
         })
         .join("")}
            <div class="footer__head__socials">
                <b>connect with us</b>

                <div>
                    <a href="#">
                        <button class="">
                            <svg width="20" height="20" fill="white">
                                <use href="${icons}#telegram"></use>
                            </svg>
                        </button>
                    </a>

                    <a href="#">
                        <button class="">
                            <svg width="20" height="20" fill="white">
                                <use href="${icons}#github"></use>
                            </svg>
                        </button>
                    </a>
                </div>
            </div> 
       </header>
       <footer class="footer__foot"> 
            <p>&copy; StramVibe All Rights Reserved</p>
            <ul class="footer__foot__list">
                <li class="footer__foot__list__item"><a href="#">terms of use</a></li>
                <li class="footer__foot__list__item"><a href="#">privacy policy</a></li>
                <li class="footer__foot__list__item"><a href="#">cookie policy</a></li>
            </ul>
       </footer>
    </footer>
        `;
  }
}

export default new FooterView();
