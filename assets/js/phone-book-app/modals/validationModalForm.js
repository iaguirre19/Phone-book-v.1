const errorMessage = document.querySelector(".error-message");
const inputsValidation = document.querySelectorAll(".input-modal");
const input = document.getElementById("profile-img");
const image = document.getElementById("profileImage");


input.addEventListener("change", handleImageUpload);
// this function displays the photo that was uploaded to the add new user form
function handleImageUpload() {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            image.style.opacity = "1";
        };
        reader.readAsDataURL(file);
    };
}



inputsValidation.forEach((inputElement) => {
  inputElement.addEventListener("blur", () => {
    if (inputElement.validity.valid) {
      toggleActiveClass(inputElement.parentElement, true);
      const errorProfile = document.querySelector(".profile_picture-error");



      if(errorProfile){
        errorProfile.style.display = "none";
      }
      removeErrorMessage(inputElement);
    } else {
      toggleActiveClass(inputElement.parentElement, false);
      createErrorMessage(inputElement, validate(inputElement));
      injectErrorIcon(inputElement)
    }
  });
});

function toggleActiveClass(element, isValid) {
  if (isValid) {
    element.classList.add("active");
    element.classList.remove("active-error");
  } else {
    element.classList.add("active-error");
    element.classList.remove("active");
  }
}

// This function create an error message when the user doesn't type any value into the input
function createErrorMessage(input, message) {
    if (!hasErrorMessage(input)) {
        const errorMessageP = document.createElement("p");
        errorMessageP.className = "error-input-invalid";
        errorMessageP.textContent = message;
        input.parentElement.appendChild(errorMessageP);
    }
}

function injectErrorIcon(element) {

  const iconElement = document.createElement("i");
  iconElement.className = "bx bx-error-circle";
  const spanElement = document.createElement("span");
  spanElement.className = "input-icon-right"
  spanElement.appendChild(iconElement);
  const parentElement = element.parentNode;
  parentElement.insertBefore(spanElement, element);
  return spanElement;
}

function removeErrorMessage(input) {
    const errorMessage = input.parentElement.querySelector(".error-input-invalid");
    if (errorMessage) {
        errorMessage.remove();
    }
}

function hasErrorMessage(input) {
    return input.parentElement.querySelector(".error-input-invalid") !== null;
}

function validate(input) {
    const typeOfInput = input.dataset.type;
    if (validateMessage[typeOfInput]) {
        return validateMessage[typeOfInput];
    }
}

const validateMessage = {
    fullName: "Please enter your full name.",
    email: "Please enter a valid email address.",
    phoneNumber: "Please enter a valid Ext.",
    jobTitle: "Please enter a valid job title.",
    manager: "Manager name's required",
    office: "Please enter a valid office.",
};

