// ---------------------- NAVBAR SCROLL EFFECT ----------------------
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// ---------------------- SKILL BAR ANIMATION ----------------------
window.addEventListener("load", () => {
  const skills = document.querySelectorAll(".skill-fill");
  skills.forEach((bar) => {
    const value = bar.getAttribute("data-fill");
    bar.style.width = value;
  });
});


// ---------------------- HERO SCROLL ZOOM EFFECT ----------------------
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-content");
  if (!hero) return; // prevents error if element missing

  const scrollY = window.scrollY;

  // SAFE scale value (min 0.90)
  const scaleValue = Math.max(0.90, 1 - scrollY * 0.0001);
  const opacityValue = Math.max(0, 1 - scrollY * 0.0015);

  hero.style.transform = `scale(${scaleValue})`;
  hero.style.opacity = opacityValue;
});

const aboutSection = document.getElementById("about");
const aboutBG = document.querySelector(".about-bg-transition");

window.addEventListener("scroll", () => {
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // When the About section starts entering the screen
    if (rect.top < windowHeight * 0.6) {
        aboutBG.style.opacity = "1";
        aboutBG.style.backdropFilter = "blur(4px) saturate(140%)";
    } else {
        aboutBG.style.opacity = "0";
        aboutBG.style.backdropFilter = "blur(18px) saturate(170%)";
    }
});

// Animate Section Headings on Scroll
const sectionHeadings = document.querySelectorAll(".section-heading");

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.4 }
);

sectionHeadings.forEach((h) => obs.observe(h));
heading.classList.add("animate");
