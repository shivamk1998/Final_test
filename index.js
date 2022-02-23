const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const phoneInput = document.querySelector("input[name='phone']");


nameInput.isValid = () => !!nameInput.value;
phoneInput.isValid = () => isValidPhone(phoneInput.value);

const inputFields = [nameInput,phoneInput];



const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));