// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Project Card Hover Effect (Alternative - using JS)
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
  });
});

// Skills List Hover Effect (Alternative - using JS)
const skillItems = document.querySelectorAll(".skills-list li");

skillItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.2)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});
// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}
document.getElementById("contactTitle").style.display = "none"; // Hide the Contact Me heading
