const linkSidebar = document.querySelectorAll(".nav_list li a");
let activeElement = null;

// Función para mostrar el elemento activo
function showActiveElement(targetElement) {
  if (activeElement) {
    activeElement.style.display = "none";
    activeElement.style.opacity = "0";
  }

  targetElement.style.display = "flex";
  targetElement.style.opacity = "1";

  activeElement = targetElement;

  // Save the current page as the last visited page in local storage.
  localStorage.setItem("lastVisitedPage", targetElement.id);
}

function clearLocalStorage() {
  localStorage.removeItem("lastVisitedPage");
}

const clearLocalStorageInterval = setInterval(clearLocalStorage, 600000);

// Function to manage navigation
function handleNavigation(event) {
  event.preventDefault();

  const targetId = this.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    showActiveElement(targetElement);
  }
}

linkSidebar.forEach((link) => {
  link.addEventListener("click", handleNavigation);
});

// Show the active element on page load
document.addEventListener("DOMContentLoaded", () => {
  const lastVisitedPage = localStorage.getItem("lastVisitedPage");
  const initialActiveLinkId = lastVisitedPage || "dashboard"; 
  const initialActiveElement = document.getElementById(initialActiveLinkId);

  if (initialActiveElement) {
    showActiveElement(initialActiveElement);
  }
});









































