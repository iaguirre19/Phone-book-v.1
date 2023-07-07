
export function inputValidation(inputsForms, iconPassword, passwordLogin){    
    activeInputsOnClick();
    function activeInputsOnClick() {
      inputsForms.forEach((input) => {
        input.addEventListener("blur", () => {
        inputEffect(input);
        });
      });
    }
    iconPassword.addEventListener("click", function () {
      passwordLogin.type =passwordLogin.type === "password" ? "text" : "password";
      passwordLogin.classList.toggle("bx-show");
      passwordLogin.classList.toggle("bx-hide");
    });
};

function inputEffect(input) {
  if(input.type === "password"){
      const password = input.value;
      const hasSpaces = /\s/.test(password);

      if(hasSpaces && input.validity.valid || !input.validity.valid){
        input.parentElement.classList.add("active-error");
        input.parentElement.classList.remove("active");
        hasAnError(input, "No space allowed");
        
        
        if(!input.validity.valid){
          hasAnError(input, "Empty password ");
        }

      }else{
        input.parentElement.classList.remove("active-error");
        input.parentElement.classList.add("active");

      }
  }else{
    if(input.validity.valid){
      input.parentElement.classList.remove("active-error");
      input.parentElement.classList.add("active");
    }else{
      hasAnError(input, "Please type your email")
      input.parentElement.classList.add("active-error");
      input.parentElement.classList.remove("active");
    }
  }
}




const hasAnError = (input, message) => {
  const containerParent = input.parentElement;

  const errorElement = document.createElement("p");
  errorElement.className = "password-error";
  errorElement.textContent = message;
  containerParent.appendChild(errorElement);

  setTimeout(() => {
    containerParent.removeChild(errorElement);
  }, 3000); // 3000 milisegundos = 3 segundos
};

