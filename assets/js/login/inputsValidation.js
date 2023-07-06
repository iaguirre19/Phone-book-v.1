
export function inputValidation(inputsForms, iconPassword, passwordLogin){    
    activeInputsOnClick();
    function activeInputsOnClick() {
      inputsForms.forEach((input) => {
        input.addEventListener("blur", () => {
            if (input.type === "password") {
                const password = input.value;
                const hasSpaces = /\s/.test(password);
                
                if (hasSpaces) {
                  errorInPassword(
                    input.parentElement,
                    "Your password cannot have spaces"
                  );
                  input.parentElement.classList.add("active-error");
                } else {
                  input.parentElement.classList.remove("active-error");
                }

            }


          if (!input.validity.valid) {
            input.parentElement.classList.remove("active");
            input.parentElement.classList.add("active-error");
          } else {
            input.parentElement.classList.remove("active-error");
            input.parentElement.classList.add("active");
          }
        });
      });
    }

    iconPassword.addEventListener("click", function () {
      passwordLogin.type =passwordLogin.type === "password" ? "text" : "password";
      passwordLogin.classList.toggle("bx-show");
      passwordLogin.classList.toggle("bx-hide");
    });
}




const errorInPassword = (container, message) => {
    const containerParent = container.parentElement.classList;
    console.log(containerParent);


    const errorElement = document.createElement("p");
  errorElement.className = "password-error";
  errorElement.textContent = message;
//   container.appendChild(errorElement);
};