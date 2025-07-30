document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("desserts");
  const items = grid.querySelectorAll(".dessert");
  const itemsPerRow = 3;
  const totalItems = items.length;

  const remainder = totalItems % itemsPerRow;
  

  items.forEach(item => item.classList.remove("centered"));

  if (remainder === 1) {
    items[totalItems - 1].classList.add("centered");
  } else if (remainder === 2) {
    items[totalItems - 2].classList.add("centered");
    items[totalItems - 1].classList.add("centered");
  }
});
