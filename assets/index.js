const showAllBtn = document.getElementById("show-all-btn");
const header = document.getElementById("header");
const TOP_OFFSET_LIMIT = 60;

showAllBtn.addEventListener("click", () => {
  document.getElementById("show-more").classList.remove("d-none");
  showAllBtn.classList.add("d-none");
});

// document.addEventListener("scroll", () => {
//   if (window.scrollY > TOP_OFFSET_LIMIT) {
//     header.classList.add("header-scroll");
//   } else {
//     header.classList.remove("header-scroll");
//   }
// });
