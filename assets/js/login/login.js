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
const loader = document.querySelector(".loader");




form.addEventListener("submit", loginRequest);

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



async function loginRequest(event){
  event.preventDefault();
  const email = userLogin.value;
  const password = passwordLogin.value;

  const loginData = {
    email,
    password,
  };
  try {
    submitBtn();

    // Retrasar la ejecución del código durante 2 segundos
    await new Promise((resolve) => setTimeout(resolve, 100));

    const dataFromServer = await loginAuth(loginData);
    const status = await handleResponse(dataFromServer);

    if (status === 200) {
      const token = localStorage.getItem("token");
      const user = await getUserLoggedIn(token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "index.html#dashboard";
      // console.log(userObj)
    }
  } catch (error) {
    // Manejo de errores
  }


};

const submitBtn = () => {
    loader.classList.add("active");

  setTimeout(function() {
    loader.classList.remove("active")
  }, 1500)
}