// Get references to the button and the sidebar toggle button
const button = document.querySelector(".btnn");
const sidebarToggle = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");

// Add a click event listener to the sidebar toggle button
sidebarToggle.addEventListener("click", function () {
  // Check if the sidebar is currently expanded
  if (sidebarToggle.getAttribute("aria-expanded") === "true") {
    // If the sidebar is expanded, hide the button
    button.style.display = "none";
  } else {
    // If the sidebar is not expanded, show the button
    button.style.display = "block";
  }
  // Check if the sidebar is currently expanded
  if (sidebarToggle.getAttribute("aria-expanded") === "true") {
    // If the sidebar is expanded, add the background color class
    navbar.classList.add("bg-color");
  } else {
    // If the sidebar is not expanded, remove the background color class
    navbar.classList.remove("bg-color");
  }
});

//                            Header Nav Background Color

// First, we need to get a reference to the header element
const header = document.querySelector(".navbar");

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
