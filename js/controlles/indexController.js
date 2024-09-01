import "core-js/stable";
import "regenerator-runtime/runtime";
import navView from "../views/sectionsView/navView";
import genreSplideView from "../views/sectionsView/genreSplideView";

// import Splide from "@splidejs/splide";
// const genreSplide = new Splide(".splide", {
//   arrows: false,
//   pagination: false,
//   perPage: SLIDES_PER_PAGE_MB,
//   mediaQuery: "min",
//   gap: "20px",
//   perMove: 1,
//   breakpoints: {
//     768: {
//       perPage: SLIDES_PER_PAGE_TB,
//     },
//     1440: {
//       perPage: SLIDES_PER_PAGE_LT,
//     },
//     1920: {
//       perPage: SLIDES_PER_PAGE_DE,
//     },
//   },
// }).mount();

// const pagination = document.querySelector(".splide--pagination-cu");

// // Object mapping media queries to slide counts
// const mediaQueryConfig = {
//   "(min-width: 0px)": SLIDES_PER_PAGE_MB,
//   "(min-width: 768px)": SLIDES_PER_PAGE_TB,
//   "(min-width: 1440px)": SLIDES_PER_PAGE_LT,
//   "(min-width: 1920px)": SLIDES_PER_PAGE_DE,
// };

// // Function to handle media query changes
// function handleMediaQueryChange(mediaQueryList, slidesPerPage) {
//   if (mediaQueryList.matches) paginationHandler(slidesPerPage);
// }

// // Set up media queries and event listeners
// Object.keys(mediaQueryConfig).forEach((query) => {
//   const mediaQueryList = window.matchMedia(query);
//   const slidesPerPage = mediaQueryConfig[query];

//   handleMediaQueryChange(mediaQueryList, slidesPerPage);

//   mediaQueryList.addEventListener("change", (e) => {
//     handleMediaQueryChange(e, slidesPerPage);
//   });
// });

// function paginationHandler(slidesPerPage) {
//   pagination.innerHTML = "";

//   const pagesLength = Math.ceil(genreSplide.length / slidesPerPage);

//   for (let index = 0; index < pagesLength; index++) {
//     const markup = `<li> </li>`;
//     pagination.insertAdjacentHTML("afterbegin", markup);
//   }

//   if (slidesPerPage === pagesLength) {
//     return;
//   }

//   const paginationItems = document.querySelectorAll(
//     ".splide--pagination-cu>li"
//   );

//   paginationItems[0].classList.add("active");

//   genreSplide.on("move", (index, prev) => {
//     const page = Math.ceil(index / slidesPerPage);
//     const prevPage = Math.ceil(prev / slidesPerPage);
//     console.log(page);
//     if (page === prevPage) return;

//     paginationItems[prevPage]?.classList.remove("active");
//     paginationItems[page]?.classList.add("active");
//   });
// }

function init() {
  // appending elements:
  navView.appendToBody(navView.markup);
  genreSplideView.render(genreSplideView.markup);
}

init();
