const menuItems = [
  {
    id: "adminSettings",
    title: "Admin Settings",
    icon: "<i class='bx bx-cog'></i>",
    description: "Manage your team members and their account permissions here."
  },
  {
    id: "managers",
    title: "Managers",
    icon: "<i class='bx bx-user icon'></i>",
    description: "View and manage information about your team's managers."
  },
  {
    id: "offices",
    title: "Offices",
    icon: "<i class='bx bx-buildings icon'></i>",
    description: "Explore and manage office locations and related details."
  },
  {
    id: "directory",
    title: "Directory",
    icon: "<i class='bx bx-book-content icon'></i>",
    description: "Access a directory of team members, their roles, and contacts."
  },
  {
    id: "dashboard",
    title: "Dashboard",
    icon: "<i class='bx bx-grid-alt icon'></i>",
    description: "Visualize data and key metrics through an interactive dashboard."
  }
];

export function generateHTML(linkId) {
  const menuItem = menuItems.find((item) => item.id === linkId);

  if (!menuItem) {
    console.log("Link ID not found in menuItems array.");
    return;
  }

  // Eliminar contenido previo
  const container = document.querySelector(".header_left");
  container.innerHTML = "";

  // Crear elementos
  const headerLeftData = document.createElement("div");
  headerLeftData.classList.add("header_left-data");

  const cogIcon = document.createElement("i");
  cogIcon.innerHTML = menuItem.icon;

  const headerTitle = document.createElement("div");
  headerTitle.classList.add("header_title");

  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("section-title");
  sectionTitle.id = "sectionName";
  sectionTitle.textContent = menuItem.title;

  const descriptionTitle = document.createElement("span");
  descriptionTitle.classList.add("header_description-title");
  descriptionTitle.textContent = menuItem.description;

  // Construir la jerarquía
  headerTitle.appendChild(sectionTitle);
  headerTitle.appendChild(descriptionTitle);

  headerLeftData.appendChild(cogIcon);
  headerLeftData.appendChild(headerTitle);

  // Crear el fragmento y añadir los elementos
  const fragment = document.createDocumentFragment();
  fragment.appendChild(headerLeftData);

  return fragment;
}

