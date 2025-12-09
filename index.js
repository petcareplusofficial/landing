const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((l) => l.classList.remove("active"));
    event.currentTarget.classList.add("active");
  });
});
