// ---------------------- SKILL BAR ANIMATION ----------------------
// Must be outside DOMContentLoaded — fires after all assets load
window.addEventListener("load", () => {
  const skills = document.querySelectorAll(".skill-fill");
  skills.forEach((bar) => {
    const value = bar.getAttribute("data-fill");
    bar.style.width = value;
  });
});

// ---------------------- VALIDATE FORM ----------------------
// Must be global so onsubmit="return validateForm()" in HTML can find it
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
  return true;
}

// =====================================================================
// Everything below needs the DOM — safely wrapped in DOMContentLoaded
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {

  // ---------------------- NAVBAR SCROLL EFFECT ----------------------
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  });

  // ---------------------- HERO SCROLL ZOOM EFFECT ----------------------
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero-content");
    if (!hero) return;
    const scrollY = window.scrollY;
    hero.style.transform = `scale(${Math.max(0.90, 1 - scrollY * 0.0001)})`;
    hero.style.opacity = Math.max(0, 1 - scrollY * 0.0015);
  });


// ----------------------EXPERIENCE SECTION-------------------------------
 const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".exp-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
  

  // ---------------------- ABOUT BG TRANSITION ----------------------
  const aboutSection = document.getElementById("about");
  const aboutBG = document.querySelector(".about-bg-transition");
  window.addEventListener("scroll", () => {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.6) {
      aboutBG.style.opacity = "1";
      aboutBG.style.backdropFilter = "blur(4px) saturate(140%)";
    } else {
      aboutBG.style.opacity = "0";
      aboutBG.style.backdropFilter = "blur(18px) saturate(170%)";
    }
  });

  // ---------------------- SECTION HEADING ANIMATION ----------------------
  const sectionHeadings = document.querySelectorAll(".section-heading");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate");
      });
    },
    { threshold: 0.4 }
  );
  sectionHeadings.forEach((h) => obs.observe(h));

  // ---------------------- PARALLAX BG ON MOUSE MOVE ----------------------
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    const bgImage = document.querySelector(".bg-image");
    if (bgImage) bgImage.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });

  // ---------------------- SMOOTH SCROLL NAV LINKS ----------------------
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 70,
        behavior: "smooth"
      });
    });
  });

  // ---------------------- SCROLL PROGRESS BAR ----------------------
  window.addEventListener("scroll", () => {
    const scrolled = (window.scrollY /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
  });

  // ---------------------- SKILLS MARQUEE ----------------------
  const row1 = [
    { name:"MATLAB",           svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M4 36L14 16l6 11 5-7 9 16z" fill="#0076A8"/><path d="M29 10c3-3 8-2 10 1l5 9-10 16-6-11z" fill="#FF6B35"/><path d="M24 24l5-14 10 16-15-2z" fill="#FFB900"/></svg>` },
    { name:"KiCad",            svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#314CB0"/><text x="24" y="30" text-anchor="middle" font-family="Arial Black,sans-serif" font-size="16" font-weight="900" fill="#fff">Ki</text><circle cx="8" cy="8" r="3" fill="#00D4AA"/><circle cx="40" cy="8" r="3" fill="#00D4AA"/><circle cx="8" cy="40" r="3" fill="#00D4AA"/><circle cx="40" cy="40" r="3" fill="#00D4AA"/><line x1="11" y1="8" x2="37" y2="8" stroke="#00D4AA" stroke-width="1.5"/><line x1="8" y1="11" x2="8" y2="37" stroke="#00D4AA" stroke-width="1.5"/><line x1="40" y1="11" x2="40" y2="37" stroke="#00D4AA" stroke-width="1.5"/><line x1="11" y1="40" x2="37" y2="40" stroke="#00D4AA" stroke-width="1.5"/></svg>` },
    { name:"Arduino",          svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#00878A"/><line x1="13" y1="24" x2="21" y2="24" stroke="#fff" stroke-width="3" stroke-linecap="round"/><line x1="27" y1="24" x2="35" y2="24" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="17" cy="24" r="6" fill="none" stroke="#fff" stroke-width="2.5"/><circle cx="31" cy="24" r="6" fill="none" stroke="#fff" stroke-width="2.5"/></svg>` },
    { name:"Altium Designer",  svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#A00000"/><polygon points="24,8 10,40 38,40" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><line x1="16" y1="32" x2="32" y2="32" stroke="#fff" stroke-width="2.5"/></svg>` },
    { name:"Embedded C",       svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#1b5e8e"/><text x="24" y="34" text-anchor="middle" font-family="Arial Black,sans-serif" font-size="26" font-weight="900" fill="#fff">C</text></svg>` },
    { name:"Python",           svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 4c-5.5 0-10 1.8-10 6v4h10v2H10c-3 0-6 2-6 8s3 8 6 8h3v-4c0-3 2.5-6 6-6h10c3 0 5-2 5-5V10c0-3-2-6-10-6z" fill="#3776AB"/><path d="M24 44c5.5 0 10-1.8 10-6v-4H24v-2h14c3 0 6-2 6-8s-3-8-6-8h-3v4c0 3-2.5 6-6 6H19c-3 0-5 2-5 5v8c0 3 2 6 10 5z" fill="#FFD43B"/><circle cx="19" cy="12" r="2" fill="#fff"/><circle cx="29" cy="36" r="2" fill="#3776AB"/></svg>` },
  ];

  const row2 = [
    { name:"PLC / Siemens",      svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#009999"/><text x="24" y="28" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" font-weight="700" fill="#fff">SIEMENS</text><rect x="8" y="32" width="32" height="3" rx="1.5" fill="#ffffff55"/><rect x="8" y="13" width="32" height="3" rx="1.5" fill="#ffffff55"/></svg>` },
    { name:"MS Excel",           svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#217346"/><path d="M8 8h18v32H8z" fill="#185C37"/><text x="17" y="30" text-anchor="middle" font-family="Arial Black,sans-serif" font-size="18" font-weight="900" fill="#fff">X</text><line x1="29" y1="18" x2="41" y2="18" stroke="#fff" stroke-width="2"/><line x1="29" y1="24" x2="41" y2="24" stroke="#fff" stroke-width="2"/><line x1="29" y1="30" x2="41" y2="30" stroke="#fff" stroke-width="2"/></svg>` },
    { name:"SCADA",              svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#1a2a4a"/><rect x="6" y="10" width="36" height="22" rx="3" fill="#0d1f3c" stroke="#3a5a8a" stroke-width="1.5"/><circle cx="16" cy="21" r="4" fill="none" stroke="#00ff88" stroke-width="2"/><line x1="16" y1="17" x2="16" y2="21" stroke="#00ff88" stroke-width="2.5"/><rect x="24" y="14" width="5" height="13" rx="2" fill="#3a5a8a"/><rect x="24" y="19" width="5" height="8" rx="1" fill="#00aaff"/><rect x="32" y="14" width="5" height="13" rx="2" fill="#3a5a8a"/><rect x="32" y="22" width="5" height="5" rx="1" fill="#ff6633"/><circle cx="18" cy="37" r="2" fill="#00ff88"/><circle cx="24" cy="37" r="2" fill="#ffaa00"/><circle cx="30" cy="37" r="2" fill="#ff3333"/></svg>` },
    { name:"Power Electronics",  svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#1a1a2e"/><path d="M27 5L14 26h10l-3 17 13-24H24z" fill="#FFD700" stroke="#FFA500" stroke-width="1"/></svg>` },
    { name:"VS Code",            svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M36 4L15 24 36 44l8-4V8z" fill="#2489CA"/><path d="M36 4L15 24l8 8L36 44V4z" fill="#1070B0"/><path d="M4 18l11-4v20L4 30V18z" fill="#2489CA"/><path d="M15 14l21-10 8 4-21 16z" fill="#ffffffcc"/><path d="M15 34l21 10-8 4-21-16z" fill="#ffffff99"/></svg>` },
    { name:"Git",                svg:`<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#F05032"/><path d="M44 22.6L25.4 4c-.9-.9-2.5-.9-3.4 0L18.4 8l4.3 4.3c1-.3 2.1 0 2.9.8.8.8 1.1 1.9.8 2.9l4.1 4.1c1-.3 2.1 0 2.9.8 1.1 1.1 1.1 2.8 0 3.9s-2.8 1.1-3.9 0c-.8-.9-1.1-2-.8-3.1L24.7 18v10.3c.3.1.5.3.7.5 1.1 1.1 1.1 2.8 0 3.9s-2.8 1.1-3.9 0-1.1-2.8 0-3.9c.3-.3.6-.5.9-.6V17.9c-.3-.1-.6-.3-.9-.6-.8-.8-1.1-2-.8-3L16.4 10 4 22.4c-1 1-1 2.5 0 3.4L22.6 44c.9 1 2.5 1 3.4 0L44 26c1-.9 1-2.5 0-3.4z" fill="#fff"/></svg>` },
  ];

  function chipHTML(s) {
    return `<div class="chip" role="img" aria-label="${s.name}">${s.svg}<span class="tip">${s.name}</span></div>`;
  }
  function build(skills, id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = [...skills,...skills,...skills,...skills].map(chipHTML).join('');
  }
  build(row1, 'row1');
  build(row2, 'row2');

  // ---------------------- EMAILJS CONTACT FORM ----------------------

emailjs.init({
  publicKey: "Rw-ff9TSxTqrzKech"
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Existing validation
    if (!validateForm()) {
      return;
    }

    emailjs.sendForm(
      "service_ct8ittg",
      "template_w4zhi9b",
      this
    )
    .then(() => {

      alert("✅ Message sent successfully!");

      contactForm.reset();

    })
    .catch((error) => {

      console.error("EmailJS Error:", error);

      alert("❌ Failed to send message. Please try again.");

    });

  });
}

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const response =
    grecaptcha.getResponse();

    if(response.length === 0){

        alert("Please verify that you're not a robot.");

        return;
    }

    if(!validateForm()){
        return;
    }

    emailjs.sendForm(
        "service_ct8ittg",
        "template_w4zhi9b",
        this
    )

    .then(() => {

        alert("Message sent successfully!");

        contactForm.reset();

        grecaptcha.reset();

    })

    .catch((error) => {

        console.error(error);

    });

});
  
}); // end DOMContentLoaded

// Human Verification Checkbox

const verifyBtn =
document.getElementById("verifyBtn");

if(verifyBtn){

verifyBtn.addEventListener("click",()=>{

    document.querySelector(".check-circle")
    .innerHTML = "✓";

    document.querySelector(".check-circle")
    .style.background="#00ff88";

    document.querySelector(".check-circle")
    .style.color="#000";

    document.getElementById("statusText")
    .textContent="Verification Successful...";

    document.querySelector(".loading-fill")
    .style.width="100%";

    setTimeout(()=>{

        document.getElementById("statusText")
        .textContent="Access Granted";

    },1500);

    setTimeout(()=>{

        document.getElementById("access-screen")
        .style.opacity="0";

        document.getElementById("access-screen")
        .style.pointerEvents="none";

    },3000);

    setTimeout(()=>{

        document.getElementById("access-screen")
        .remove();

    },3500);

});

}

