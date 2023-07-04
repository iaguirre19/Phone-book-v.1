import { loginValidation} from "../api/loginAcces.js";

const inputsForms = document.querySelectorAll(".login-input");
const iconPassword = document.querySelector("#showPassword");
const userLogin = document.querySelector("#userLogin");
const passwordLogin = document.querySelector("#passwordLogin");
const btnlogin = document.querySelector("#btnLogin");


btnlogin.addEventListener("submit", sendUser);


// Ruta para subir la imagen desde el frontend al servidor
// app.post("/upload-image", upload.single("image"), register);

// function createUser(emailInput, passwordInput) {
  
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   // console.log(email)
  
//   let user = {
//     email: email,
//     password: password
//   };

//   return user;
// }

// btnlogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   const user = createUser(userLogin, passwordLogin);
//   const dato = loginValidation(user);
//   // alert(dato)

// });

activeInputsOnClick();
function activeInputsOnClick() {
  inputsForms.forEach((input) => {
    input.addEventListener("blur", () => {
      if (!input.validity.valid) {
        input.parentElement.classList.remove("active");
        input.parentElement.classList.add("active-error");
      } else {
        input.parentElement.classList.remove("active-error");
        input.parentElement.classList.add("active");

      }
    });
  });
};

iconPassword.addEventListener("click", function () {
  passwordLogin.type = passwordLogin.type === "password" ? "text" : "password";
  passwordLogin.classList.toggle("bx-show");
  passwordLogin.classList.toggle("bx-hide");
});



function sendUser(e){
  e.preventDefault();


}






// 




