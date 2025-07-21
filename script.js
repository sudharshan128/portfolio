// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
const roles = ["AI & ML Engineer", "Full Stack Developer", "Data Scientist"];
let index = 0;
function typeRole() {
  typingText.textContent = roles[index];
  index = (index + 1) % roles.length;
}
setInterval(typeRole, 3000);
typeRole();
