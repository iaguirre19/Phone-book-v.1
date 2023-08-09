// Obtener el botón de filtro y el menú desplegable
const filterButton = document.querySelector(".filter-button");
const filterDropdown = document.querySelector(".filter-dropdown");

// Agregar un evento de clic al botón de filtro
filterButton.addEventListener("click", () => {
  // Alternar la clase 'active' en el menú desplegable para mostrar u ocultar
  filterDropdown.classList.toggle("active");
});

// Agregar un evento de clic al documento para cerrar el menú desplegable si se hace clic fuera de él
document.addEventListener("click", (event) => {
  if (
    !filterDropdown.contains(event.target) &&
    !filterButton.contains(event.target)
  ) {
    filterDropdown.classList.remove("active");
  }
});

