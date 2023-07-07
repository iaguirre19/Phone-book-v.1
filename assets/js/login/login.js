// import { URL_LOGIN, URL_PROFILE } from "../conf/private-routes.js";
import { loginAuth } from "../api/http-provider.js";
import { inputValidation } from "./inputsValidation.js";

const inputsForms = document.querySelectorAll(".login-input"); //
const iconPassword = document.querySelector("#showPassword"); //
const userLogin = document.querySelector("#userLogin");
const passwordLogin = document.querySelector("#passwordLogin"); //
const btnlogin = document.querySelector("#btnLogin");
const form = document.getElementById('form');

inputValidation(inputsForms, iconPassword, passwordLogin);

const token = localStorage.getItem("token");


form.addEventListener("submit", async function (event) {
  event.preventDefault(); 
  const email = userLogin.value;
  const password = passwordLogin.value;

  const formData = {
    email,
    password,
  };

  // const option = {
  //   method: "POST",
  //   body: JSON.stringify(formData),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // try {
  //   const response = await fetch(URL_LOGIN, option);
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   const data = await response.json();
  //   const { token } = data;
  //   console.log(`Este es el valor del token ${token}`);
  //   localStorage.setItem("token", token);
  //   // window.location.href = "index.html";
  //   if (data && data.error) {
  //     // Mostrar el mensaje de error en una alerta o cualquier otra forma deseada
  //     console.log(data.status);
  //   } else {
  //     // Redirigir a la página de dashboard o realizar otras acciones
  //     console.log(data.status);
  //     // en caso de una respuesta exitosa sin error
  //     // ...
  //   }
  // } catch (error) {
  //   console.error("Error:", error);
  // }
  const dataFromServer = await loginAuth(formData)

  console.log(`Este es del lado del cliente ${dataFromServer}`);
});
