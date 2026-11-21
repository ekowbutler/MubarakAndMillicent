// Mubarak & Millicent wedding website
// Update the WhatsApp number below before publishing. Use international format
// without spaces or the + sign, e.g. 233XXXXXXXXX.
const RSVP_WHATSAPP_NUMBER = "233000000000";

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

const rsvpLink = document.getElementById("rsvp");
const rsvpNote = document.getElementById("rsvp-note");
if (RSVP_WHATSAPP_NUMBER && !RSVP_WHATSAPP_NUMBER.includes("0000000000")) {
  const message = encodeURIComponent("Hello! I would like to RSVP for Mubarak and Millicent's wedding on 8 and/or 9 January 2027.");
  rsvpLink.href = `https://wa.me/${RSVP_WHATSAPP_NUMBER}?text=${message}`;
  rsvpNote.textContent = "Tap the button above to send your RSVP on WhatsApp.";
} else {
  rsvpLink.href = "https://wa.me/";
  rsvpLink.addEventListener("click", event => {
    event.preventDefault();
    alert("The couple's WhatsApp RSVP number will be added soon. Please check back later.");
  });
}

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
