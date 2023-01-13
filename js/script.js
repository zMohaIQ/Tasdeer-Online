//                            Header Nav Background Color

// First, we need to get a reference to the header element
const header = document.querySelector(".header");

// Next, we'll define a function that will be called whenever the window is scrolled
function handleScroll() {
  // We'll use the scrollY property to determine the number of pixels the window has been scrolled vertically
  const scrollY = window.scrollY;

  // If the scrollY value is greater than 0, we'll add the "scrolled" class to the header element
  if (scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    // Otherwise, we'll remove the "scrolled" class
    header.classList.remove("scrolled");
  }
}

// Finally, we'll add an event listener to the window object to call the handleScroll function whenever the window is scrolled
window.addEventListener("scroll", handleScroll);

// ---------------------------------

("use strict");
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const escapeModal = function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
};

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);
document.addEventListener(`keydown`, escapeModal);

for (let i = 0; i < btnsOpenModal.length; i++) btnsOpenModal[i].addEventListener("click", openModal);
