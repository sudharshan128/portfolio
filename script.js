async function loadComponent(id, file) {
  const response = await fetch(file);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html");
  loadComponent("footer", "components/footer.html");
  document.body.classList.add("page-loaded");
  // Typing animation for main headline
  const typing = document.querySelector('.typing');
  if (typing) {
    typing.textContent = typing.getAttribute('data-text');
  }
});