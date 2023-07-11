import { loginAuth, getUserLoggedIn } from "../api/http-provider.js";
import {
  inputValidation,
  errorFromServer,
  printErrorConfirmation,
} from "./inputsValidation.js";

const inputsForms = document.querySelectorAll(".login-input"); //
const iconPassword = document.querySelector("#showPassword"); //
const userLogin = document.querySelector("#userLogin");
const passwordLogin = document.querySelector("#passwordLogin"); //
const form = document.getElementById('form');

inputValidation(inputsForms, iconPassword, passwordLogin);



function handleResponse(dataFromServer) {
  return new Promise((resolve, reject) => {
    const { resStatus, resMessage, type } = dataFromServer;

    if (resStatus === 403) {
      if (type === "confirmation") {
        printErrorConfirmation(resMessage);
      } else {
        errorFromServer(inputsForms, type, resMessage);
      }
      reject(new Error("Error 403"));
    } else if (resStatus === 404) {
      errorFromServer(inputsForms, type, resMessage);
      reject(new Error("Error 404"));
    } else {
      resolve(dataFromServer);
    }
  });
}

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
    const status = await handleResponse(dataFromServer); // Espera a que la promesa se resuelva o se rechace
    if(status === 200 ){
      const token = localStorage.getItem("token");
      getUserLoggedIn(token)
        .then((user) => {
          return user
        })
        .catch((error) => {
          console.error(error);
        });

    }
  } catch (error) {
    const e = new Error("Error 404, Please contact IT department.");
  }
});

