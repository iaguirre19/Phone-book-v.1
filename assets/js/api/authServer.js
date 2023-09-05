// // import { response } from "express";

import { URL_PROFILE } from "../conf/private-routes";

// const urlLogin = "http://localhost:4000/api/userAdmin/login";


// let errorMessage;

// export const loginValidation = async (client) => {
//   try {
//     const response = await fetch(urlLogin, {
//       method: "POST",
//       body: JSON.stringify(client),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.status === 404) {
//       const errorData = await response.json();
//       const errorMessage = errorData.msg;
//       throw new Error(errorMessage);
//     }

//     if (!response.ok) {
//       throw new Error(
//         "Failed to verify user. Please contact the IT department."
//       );
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//     // Mostrar una alerta en la página
//     alert(error.message);
//   }
// };


// Obtener el token almacenado en localStorage
// const token = localStorage.getItem('token');

// Función para realizar la autenticación en el servidor y obtener la información del usuario



const authenticateWithServer = async (token, url) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para redirigir a la página de inicio después de autenticarse
const redirectToHome = (userProfile) => {
  // Realizar acciones necesarias con la información del usuario
  console.log(userProfile);

  // Redirigir a la página de inicio (index.html)
  window.location.href = 'index.html';
};

// Verificar si hay un token almacenado
if (token) {
  // Autenticar con el servidor y obtener la información del usuario
  authenticateWithServer(token)
    .then((userProfile) => {
      // Redirigir a la página de inicio con la información del usuario
      redirectToHome(userProfile);
    })
    .catch((error) => {
      console.error('Error:', error);
      // Realizar acciones en caso de error, como redirigir a una página de inicio de sesión
    });
} else {
  // No se encontró un token en localStorage, realizar acciones en caso de que no haya sesión iniciada
  // por ejemplo, redirigir a una página de inicio de sesión
}


