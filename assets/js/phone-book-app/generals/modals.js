// document.addEventListener("DOMContentLoaded", () => {
//     const btnNewAdmins = document.querySelector("#btnNewUserAdmins");
//     const btnNewDirectory = document.querySelector('#btnNewUserDirectory')

//     const modal = document.querySelector("#modal");
//     const overlay = document.querySelector("#overlay");

//     const showModal = () => {

//         modal.style.right = "0";
//         modal.style.zIndex = "250";
//         modal.style.opacity = "1";
//         overlay.style.display = "block";
//     };

//     const hideOverlay = () => {
//        modal.style.right = "-40%";
//        overlay.style.display = "none";

//      };

//   btnNewAdmins.addEventListener("click", showModal);
//   btnNewDirectory.addEventListener('click', showModal);
//   overlay.addEventListener("click", hideOverlay);
// });



document.addEventListener("DOMContentLoaded", () => {
  const btnNewAdmins = document.querySelector("#btnNewUserAdmins");
  const btnNewDirectory = document.querySelector("#btnNewUserDirectory");

  const modal = document.querySelector("#modal");
  const overlay = document.querySelector("#overlay");

  const showModal = (modalClass) => {
    modal.style.right = "0";
    modal.style.zIndex = "250";
    modal.style.opacity = "1";
    overlay.style.display = "block";
    document.querySelector(modalClass).style.display = "block";
  };

  const hideModal = (modalClass) => {
    modal.style.right = "-40%";
    overlay.style.display = "none";
    document.querySelector(modalClass).style.display = "none";
  };

  btnNewAdmins.addEventListener("click", () => {
    showModal(".add_newuser-modal");
  });

  btnNewDirectory.addEventListener("click", () => {
    showModal(".add_newuser-directory");
  });

  overlay.addEventListener("click", () => {
    hideModal(".add_newuser-modal");
    hideModal(".add_newuser-directory");
  });
});


