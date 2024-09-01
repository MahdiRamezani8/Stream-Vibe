import Splide from "@splidejs/splide";
import View from "../view";
import icons from "url:../../../icons/icons.svg";
import image1 from "url:../../../images/Image1.png";
import image2 from "url:../../../images/Image2.png";
import image3 from "url:../../../images/Image3.png";
import image4 from "url:../../../images/Image4.png";
import {
  mediaQueryConfig,
  SLIDES_PER_PAGE_DE,
  SLIDES_PER_PAGE_LT,
  SLIDES_PER_PAGE_MB,
  SLIDES_PER_PAGE_TB,
} from "../../config";

// Class to handle the genre-specific Splide carousel view
class GenreSplideView extends View {
  // Array of slide data with associated images and genre labels
  _slides = [
    {
      images: [image1, image2, image3, image4],
      genre: "Action",
    },
    {
      images: [image1, image2, image3, image4],
      genre: "Horror",
    },
    {
      images: [image1, image2, image3, image4],
      genre: "Comedy",
    },
    {
      images: [image1, image2, image3, image4],
      genre: "Action",
    },
    {
      images: [image1, image2, image3, image4],
      genre: "Action",
    },
  ];

  // Markup template for the Splide carousel and custom pagination container
  _markup = `
    <section class="splide" aria-label="Slide Container Example">
      <div class="splide__track">
        <ul class="splide__list">
          ${this._generateSlidesMarkup.call(this)}
        </ul>
      </div>
    </section>
    <ul class="splide--pagination-cu splide--pagination-cu--MB"></ul>
  `;

  // Render the carousel and initialize Splide
  render() {
    this.appendToDom(
      document.querySelector(".section-title"),
      this._markup,
      "afterend"
    );
    this.initSplide();
  }

  // Generate the HTML markup for each slide using the _slides array
  _generateSlidesMarkup() {
    return this._slides
      .map(
        (slide) => `
          <li class="splide__slide">
            <div class="genre-slider__slide swiper-slide">
              <header class="genre-slider__slide__header">
                ${slide.images
                  .map(
                    (img) => `<img src="${img}" alt="${slide.genre} Image" />`
                  )
                  .join("")}
              </header>
              <footer class="genre-slider__slide__footer">
                <span>${slide.genre}</span>
                <span>
                  <svg width="24" height="24">
                    <use href="${icons}#arrow-right"></use>
                  </svg>
                </span>
              </footer>
            </div>
          </li>`
      )
      .join("");
  }

  // Initialize the Splide carousel with responsive configuration and custom pagination
  initSplide() {
    const genreSplide = new Splide(".splide", {
      arrows: false, // Disable default navigation arrows
      pagination: false, // Disable default pagination, using custom instead
      perPage: SLIDES_PER_PAGE_MB, // Set slides per page for mobile by default
      mediaQuery: "min", // Use "min" media query for responsive breakpoints
      gap: "20px", // Set the gap between slides
      perMove: 1, // Move one slide per scroll
      breakpoints: {
        768: {
          perPage: SLIDES_PER_PAGE_TB, // Set slides per page for tablets
        },
        1440: {
          perPage: SLIDES_PER_PAGE_LT, // Set slides per page for laptops
        },
        1920: {
          perPage: SLIDES_PER_PAGE_DE, // Set slides per page for desktops
        },
      },
    }).mount();

    // Set up custom pagination behavior
    this._setupPagination(genreSplide);
  }

  // Method to set up custom pagination based on the current slide
  _setupPagination(genreSplide) {
    const pagination = document.querySelector(".splide--pagination-cu");

    const handleMediaQueryChange = (mediaQueryList, slidesPerPage) => {
      if (mediaQueryList.matches)
        this.paginationHandler(slidesPerPage, genreSplide);
    };

    // Set up event listeners for media queries to update pagination accordingly
    Object.keys(mediaQueryConfig).forEach((query) => {
      const mediaQueryList = window.matchMedia(query);
      const slidesPerPage = mediaQueryConfig[query];

      handleMediaQueryChange(mediaQueryList, slidesPerPage);

      mediaQueryList.addEventListener("change", (e) => {
        handleMediaQueryChange(e, slidesPerPage);
      });
    });
  }

  // Method to handle pagination updates when the slide changes
  paginationHandler(slidesPerPage, genreSplide) {
    const pagination = document.querySelector(".splide--pagination-cu");
    pagination.innerHTML = "";

    const pagesLength = Math.ceil(genreSplide.length / slidesPerPage);

    // Generate pagination markers based on the number of pages
    for (let index = 0; index < pagesLength; index++) {
      const markup = `<li></li>`;
      pagination.insertAdjacentHTML("afterbegin", markup);
    }

    // If there's only one page, no need for pagination
    if (pagesLength === 1) {
      return;
    }

    const paginationItems = document.querySelectorAll(
      ".splide--pagination-cu>li"
    );

    // Set the active pagination item based on the current slide index
    paginationItems[genreSplide.index].classList.add("active");

    // Listen for slide move events to update pagination
    genreSplide.on("move", (index, prev) => {
      const page = Math.ceil(index / slidesPerPage);
      const prevPage = Math.ceil(prev / slidesPerPage);
      if (page === prevPage) return;

      paginationItems[prevPage]?.classList.remove("active");
      paginationItems[page]?.classList.add("active");
    });
  }
}

// Export an instance of the GenreSplideView class
export default new GenreSplideView();
