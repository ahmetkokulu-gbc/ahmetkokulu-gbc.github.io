const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

// Highlight the current section in the navigation bar
document.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      currentSection = section.getAttribute("id");
    }
    console.log("scrollY ", scrollY)
    console.log("currentSection", currentSection);
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});

// Smooth scrolling when clicking on a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
