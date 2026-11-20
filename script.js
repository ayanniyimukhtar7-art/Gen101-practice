
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

const menuLinks = mobileMenu.querySelectorAll("a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("open");
  });
});

