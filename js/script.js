// window.addEventListener(`scroll`, () => {
//   console.log();
// });

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
