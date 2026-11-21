// Mubarak & Millicent wedding website

function updateCountdowns() {
  document.querySelectorAll(".timer").forEach(timer => {
    const target = new Date(timer.dataset.date).getTime();
    const remaining = target - Date.now();
    const values = remaining <= 0
      ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
      : {
          days: Math.floor(remaining / 86400000),
          hours: Math.floor((remaining % 86400000) / 3600000),
          minutes: Math.floor((remaining % 3600000) / 60000),
          seconds: Math.floor((remaining % 60000) / 1000)
        };
    Object.entries(values).forEach(([unit, value]) => {
      const el = timer.querySelector(`[data-unit="${unit}"]`);
      if (el) el.textContent = String(value).padStart(2, "0");
    });
  });
}
updateCountdowns();
setInterval(updateCountdowns, 1000);

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const slideshow = document.getElementById("slideshow-track");
const slideshowControls = document.querySelector(".slideshow-controls");
const slides = Array.from(slideshow.children);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

slideshowControls.hidden = false;
slideshowControls.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const current = Math.round(slideshow.scrollLeft / slideshow.clientWidth);
    const next = (current + Number(button.dataset.step) + slides.length) % slides.length;
    slideshow.scrollTo({
      left: slides[next].offsetLeft,
      behavior: reducedMotion.matches ? "instant" : "smooth"
    });
  });
});
