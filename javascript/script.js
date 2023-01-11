const Navbar = document.querySelector("nav.navbar");
const btn_back_to_up = document.querySelector(".btn_back_to_up");
const header_scrolled = () => {
  window.scrollY > 100
    ? Navbar.classList.add("header_scrolled")
    : Navbar.classList.remove("header_scrolled");

  window.scrollY > 700
    ? btn_back_to_up.classList.add("show")
    : btn_back_to_up.classList.remove("show");
};
