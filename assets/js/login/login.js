import { inputValidation } from "./inputsValidation.js";

const inputsForms = document.querySelectorAll(".login-input"); //
const iconPassword = document.querySelector("#showPassword"); //
const userLogin = document.querySelector("#userLogin");
const passwordLogin = document.querySelector("#passwordLogin"); //
const btnlogin = document.querySelector("#btnLogin");
const form = document.getElementById('form');


inputValidation(inputsForms, iconPassword, passwordLogin);


// Maneja el evento de envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Obtén los valores de los campos de entrada
  const email = userLogin.value
  const password = passwordLogin.value;


  console.log(email)
  console.log(password)



  // // Crea un objeto con los datos del formulario
  // const formData = {
  //   email: email,
  //   password: password
  // };

  // // Realiza una solicitud POST al servidor utilizando Fetch
  // fetch('/login', {
  //   method: 'POST',
  //   body: JSON.stringify(formData),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then(response => {
  //   // Maneja la respuesta del servidor
  //   // Aquí puedes redirigir al usuario a otra página o manejar la respuesta según corresponda
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });
});