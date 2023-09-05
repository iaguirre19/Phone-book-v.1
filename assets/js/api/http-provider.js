// import { Stats } from "fs";

const url = "http://localhost:4000/api/userAdmin";

let errorType = {}

const loginAuth =  async (loginData) => {
    try {
        const option = {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const urlLogin =  `${url}${"/login"}`;
        const response = await fetch(urlLogin, option);        
        const data = await response.json();

        console.log(data)

        if (!response.ok) {
          const { msg, type } = data;
          errorType.type = type;
          errorType.resStatus = response.status;
          errorType.resMessage = msg;
          throw new Error(response.status);
        }else{
          const { token } = data;
          localStorage.setItem("token", token);
          return response.status
          // Localstorage tiene que tener una duracion de 10 horas.
        }
    } catch (error) {
        if (error instanceof Error) {
          if (error.message === "403") {
            return errorType
          } else if (error.message === "404") {
            return errorType;
          }
        }
    }
}

const getUserLoggedIn = async (token) => {
  try {
    const urlAuth = `${url}${"/profile"}`
    const response = await fetch(urlAuth, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if(response.ok){
      const data = await response.json();
      const { profile } = data
      return profile
    }else{
      throw new Error("error en el server")
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
} 
 


export {
    loginAuth,
    getUserLoggedIn
}