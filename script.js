gsap.registerPlugin(ScrollTrigger);

// Loader animation
window.addEventListener("load", () => {
  gsap.to("#loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
    }
  });
});

// Logo animation
gsap.from(".logo span", {
  opacity: 0,
  y: -50,
  stagger: 0.1,
  duration: 1.2,
  ease: "power2.out"
});

// Scroll-triggered project reveal
gsap.utils.toArray(".project").forEach((proj) => {
  gsap.from(proj, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: proj,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

// Theme toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

