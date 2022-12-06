let hamburgerMenu = document.querySelector(".fa-solid");
let menuItems = document.querySelector(".nav-items");
function display_Nav_Items() {
  menuItems.style.display = "block";
}
function clear_Nav_Items() {
  menuItems.style.display = "none";
}
hamburgerMenu.addEventListener("click", display_Nav_Items);
hamburgerMenu.addEventListener("dblclick", clear_Nav_Items);
