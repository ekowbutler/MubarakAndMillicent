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

const slideshowToggle = slideshowControls.querySelector(".slideshow-toggle");
const slideshowToggleLabel = slideshowToggle.querySelector(".slideshow-toggle-label");
let playing = !reducedMotion.matches;
let slideshowVisible = false;
let slideTimer;

function advanceSlide(step, behavior) {
  const current = Math.round(slideshow.scrollLeft / slideshow.clientWidth);
  const next = (current + step + slides.length) % slides.length;
  slideshow.scrollTo({ left: slides[next].offsetLeft, behavior });
}

function updateSlideshowPlayback() {
  clearInterval(slideTimer);
  slideshowToggleLabel.textContent = playing ? "Pause" : "Play";
  if (playing && slideshowVisible && !document.hidden) {
    slideTimer = setInterval(() => advanceSlide(1, "instant"), 5000);
  }
}

slideshowControls.hidden = false;
slideshowControls.querySelectorAll("[data-step]").forEach(button => {
  button.addEventListener("click", () => {
    advanceSlide(Number(button.dataset.step), reducedMotion.matches ? "instant" : "smooth");
    updateSlideshowPlayback();
  });
});

slideshowToggle.addEventListener("click", () => {
  playing = !playing;
  updateSlideshowPlayback();
});

reducedMotion.addEventListener("change", event => {
  if (event.matches) playing = false;
  updateSlideshowPlayback();
});
document.addEventListener("visibilitychange", updateSlideshowPlayback);

const slideshowObserver = new IntersectionObserver(([entry]) => {
  slideshowVisible = entry.isIntersecting;
  updateSlideshowPlayback();
});
slideshowObserver.observe(slideshow);
updateSlideshowPlayback();

const rsvpForm = document.querySelector(".rsvp-form");
const attendance = rsvpForm.elements.attendance;
const rsvpDetails = rsvpForm.querySelector(".rsvp-details");
const rsvpResponse = rsvpForm.querySelector(".rsvp-response");

function updateRsvpChoice() {
  const attending = attendance.value === "accept";
  rsvpDetails.hidden = !attending;
  rsvpDetails.disabled = !attending;
  rsvpResponse.textContent = attendance.value === "decline"
    ? "Thank you for letting us know. Please continue to pray for us as we begin our life together. ❤️"
    : "";
}

attendance.addEventListener("change", updateRsvpChoice);
window.addEventListener("pageshow", updateRsvpChoice);
rsvpForm.addEventListener("submit", event => {
  event.preventDefault();
  if (attendance.value !== "accept") return;
  const reply = new FormData(rsvpForm);
  if (reply.get("website").trim()) return;

  const message = [
    "RSVP for Mubarak and Millicent's wedding",
    `Full name: ${reply.get("fullName").trim()}`,
    `Email: ${reply.get("email").trim()}`,
    "Will you join us? Joyfully accept"
  ];
  const phone = reply.get("phone").trim();
  const note = reply.get("message").trim();
  if (phone) message.push(`Phone: ${phone}`);
  message.push(`Number of guests: ${reply.get("guests")}`);
  if (note) message.push(`Note: ${note}`);

  const destination = new URL(rsvpForm.action);
  destination.searchParams.set("text", message.join("\n"));
  window.location.assign(destination.href);
});

updateRsvpChoice();
rsvpForm.hidden = false;
