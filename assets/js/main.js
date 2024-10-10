let dropAnchor = document.querySelector(".dropAnchor");
let dropDownMenu = document.querySelector(".dropDown-menu");
dropAnchor.addEventListener("click", (event) => {
  event.preventDefault();
  dropDownMenu.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (
    !dropAnchor.contains(event.target) &&
    !dropDownMenu.contains(event.target)
  ) {
    dropDownMenu.classList.add("hidden");
  }
});
