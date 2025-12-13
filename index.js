
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


const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".skill-bar span");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.dataset.level;
      });
      skillObserver.disconnect(); // animate once
    }
  });
}, { threshold: 0.5 });

skillObserver.observe(skillSection);

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  document.querySelector(".bg-video").style.transform =
    `translate(${x}px, ${y}px) scale(1.05)`;
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    const yOffset = -70; // navbar height
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / docHeight) * 100;
  document.getElementById("scroll-progress").style.width = scrolled + "%";
});


function validateForm() {

  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  const nameRegex = /^[A-Za-z ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(name)) {
    alert("❌ Name must contain only letters (minimum 3 characters)");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("❌ Please enter a valid email address");
    return false;
  }

  if (message.length < 10) {
    alert("❌ Message must be at least 10 characters long");
    return false;
  }

  return true; // ✅ form submit
}
