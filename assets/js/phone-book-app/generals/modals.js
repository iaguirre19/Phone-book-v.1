document.addEventListener("DOMContentLoaded", () => {
    const btnNewAdmins = document.querySelector("#btnNewUserAdmins");
    const modal = document.querySelector("#modal");
    const overlay = document.querySelector("#overlay");

    const showModal = () => {
        modal.style.right = "0";
        modal.style.zIndex = "250";
        modal.style.opacity = "1";

        overlay.style.display = "block";
    };

    const hideOverlay = () => {
       modal.style.right = "-40%";
       overlay.style.display = "none";

     };

  btnNewAdmins.addEventListener("click", showModal);
  overlay.addEventListener("click", hideOverlay);
});

// Show modal
