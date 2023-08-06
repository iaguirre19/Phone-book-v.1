// document.addEventListener("DOMContentLoaded", function () {
//   const table = document.querySelector(".adminTools_content-table-container");
//   const rowsPerPage = 4;
//   const totalRows = table.rows.length - 1; // Restamos 1 para no contar la fila de encabezado

//   let currentPage = 1;
//   let totalPages = Math.ceil(totalRows / rowsPerPage);

//   function showPage(page) {
//     const startIndex = (page - 1) * rowsPerPage;
//     const endIndex = startIndex + rowsPerPage;

//     const rows = Array.from(table.rows).slice(1); // Obtener todas las filas de la tabla (excluyendo la fila de encabezado)
//     rows.forEach((row, index) => {
//       if (index >= startIndex && index < endIndex) {
//         row.classList.add("show-row"); // Mostrar las filas del rango actual
//       } else {
//         row.classList.remove("show-row"); // Ocultar las filas fuera del rango actual
//       }
//     });
//   }

//   function updatePagination() {
//     const currentDisplay = document.querySelector(".current");
//     currentDisplay.textContent = currentPage;
//   }

//   function goToPreviousPage() {
//     if (currentPage > 1) {
//       currentPage--;
//       showPage(currentPage);
//       updatePagination();
//     }
//   }

//   function goToNextPage() {
//     if (currentPage < totalPages) {
//       currentPage++;
//       showPage(currentPage);
//       updatePagination();
//     }
//   }

//   const prevButton = document.querySelector(".prev-button");
//   const nextButton = document.querySelector(".next-button");

//   prevButton.addEventListener("click", goToPreviousPage);
//   nextButton.addEventListener("click", goToNextPage);

//   showPage(currentPage);
//   updatePagination();
// });




// document.addEventListener("DOMContentLoaded", function () {
//   const table = document.querySelector(".adminTools_content-table-container");
//   const rowsPerPage = 4;
//   const totalRows = table.rows.length - 1; // Restamos 1 para no contar la fila de encabezado

//   let currentPage = 1;
//   let totalPages = Math.ceil(totalRows / rowsPerPage);

//   function showPage(page) {
//     const startIndex = (page - 1) * rowsPerPage;
//     const endIndex = startIndex + rowsPerPage;

//     for (let i = 1; i < table.rows.length; i++) {
//       table.rows[i].style.display =
//         i > startIndex && i <= endIndex ? "table-row" : "none";
//     }
//   }

//   function updatePagination() {
//     const currentDisplay = document.querySelector(".current");
//     currentDisplay.textContent = currentPage;
//   }

//   function goToPreviousPage() {
//     if (currentPage > 1) {
//       currentPage--;
//       showPage(currentPage);
//       updatePagination();
//     }
//   }

//   function goToNextPage() {
//     if (currentPage < totalPages) {
//       currentPage++;
//       showPage(currentPage);
//       updatePagination();
//     }
//   }

//   const prevButton = document.querySelector(".prev-button");
//   const nextButton = document.querySelector(".next-button");

//   prevButton.addEventListener("click", goToPreviousPage);
//   nextButton.addEventListener("click", goToNextPage);

//   showPage(currentPage);
//   updatePagination();
// });










// Obtener elementos de la tabla y el botón
// const tableContainer = document.querySelector(".adminTools_content-table-container");
// const scrollButton = document.getElementById("scroll-button");

// // Mostrar el botón solo si hay scroll
// tableContainer.addEventListener("scroll", () => {
//   if (tableContainer.scrollHeight > tableContainer.clientHeight) {
//     scrollButton.style.display = "block";
//   } else {
//     scrollButton.style.display = "none";
//   }
// });

// // Scroll de un tr por tr al hacer clic en el botón
// scrollButton.addEventListener("click", () => {
//   tableContainer.scrollTop += tableContainer.clientHeight;
// });

// // Ocultar el botón inicialmente si no hay scroll al cargar la página
// if (tableContainer.scrollHeight <= tableContainer.clientHeight) {
//   scrollButton.style.display = "none";
// }