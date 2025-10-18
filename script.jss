// Typing animation
const roleText = "Front-End Developer Intern";
let index = 0;
function typeEffect() {
  if (index < roleText.length) {
    document.getElementById("role").textContent += roleText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = 
    document.body.classList.contains("dark-mode") ? "☀ Light Mode" : "🌙 Dark Mode";
});