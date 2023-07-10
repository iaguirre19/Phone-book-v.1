// import { URL_LOGIN, URL_PROFILE } from "../conf/private-routes.js";
// import { error } from "console";
import { loginAuth } from "../api/http-provider.js";
import { inputValidation } from "./inputsValidation.js";

const inputsForms = document.querySelectorAll(".login-input"); //
const iconPassword = document.querySelector("#showPassword"); //
const userLogin = document.querySelector("#userLogin");
const passwordLogin = document.querySelector("#passwordLogin"); //
const form = document.getElementById('form');

inputValidation(inputsForms, iconPassword, passwordLogin);

const token = localStorage.getItem("token");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = userLogin.value;
  const password = passwordLogin.value;

  const loginData = {
    email,
    password,
  };
  



  loginAuth(loginData)
    .then((dataFromServer) => {
      if (dataFromServer === undefined) {
        throw new Error(404);
      }

      console.log(getLastAddedValue(dataFromServer));

    })
    .catch((error) => {
      const e = new Error("404, contact IT department please"); // Manejo de errores si ocurre alguna excepción
      alert(e);
    });
;


  // const dataFromServer = loginAuth(formData);
  // console.log(dataFromServer)
  



  // if(token === ""){
  //   console.log(`Informacion del token ${token}`)
    
  // }else{
  //   const lastError = getLastAddedValue(dataFromServer);
  //   console.log(lastError);

  // }



});

function getLastAddedValue(array) {
  return array.length > 0 ? array[array.length - 1] : null;
}




