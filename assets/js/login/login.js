// import { URL_LOGIN, URL_PROFILE } from "../conf/private-routes.js";
// import { error } from "console";
import { loginAuth } from "../api/http-provider.js";
import { inputValidation, errorFromServer } from "./inputsValidation.js";

const inputsForms = document.querySelectorAll(".login-input"); //
const iconPassword = document.querySelector("#showPassword"); //
const userLogin = document.querySelector("#userLogin");
const passwordLogin = document.querySelector("#passwordLogin"); //
const form = document.getElementById('form');

inputValidation(inputsForms, iconPassword, passwordLogin);

const token = localStorage.getItem("token");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const email = userLogin.value;
//   const password = passwordLogin.value;

//   const loginData = {
//     email,
//     password,
//   };
  
//   loginAuth(loginData)
//   .then((dataFromServer) => {
//       const {resStatus, resMessage, type } = dataFromServer;
//       if(resStatus === 403){
//         if(type === "confirmation"){
//           return console.log("confirmation error")
//         }else{
//           return errorFromServer(inputsForms, type, resMessage);
//         }
//       }

//       if(resStatus === 404){
//         return errorFromServer(inputsForms, type, resMessage);
//       }
//     })
//     .catch((error) => {
//       const e = new Error("Erro  404, Please contact IT department."); // Manejo de errores si ocurre alguna excepción
//       alert(e);
//     });
// });


form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const email = userLogin.value;
  const password = passwordLogin.value;

  const loginData = {
    email,
    password,
  };

  try {
    const dataFromServer = await loginAuth(loginData);
    const { resStatus, resMessage, type } = dataFromServer;

    if (resStatus === 403) {
      if (type === "confirmation") {
        console.log("confirmation error");
      } else {
        errorFromServer(inputsForms, type, resMessage);
      }
    } else if (resStatus === 404) {
      errorFromServer(inputsForms, type, resMessage);
    }
  } catch (error) {
    const errorMessage = "Error 404. Please contact the IT department.";
    alert(errorMessage);
  }
});











function getLastAddedValue(array) {
  return array.length > 0 ? array[array.length - 1] : null;
}




