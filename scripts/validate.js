
const validationClasses = {
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };

const form = document.querySelector('.popup__content');

const enableValidation = ({formSelector, ...rest}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    addEventListeners(form, rest);
  });
};

const addEventListeners = (form, {inputSelector, submitButtonSelector, inputErrorClass, errorClass, ...rest}) => {
  const formInputs = Array.from(form.querySelectorAll(inputSelector));
  const saveButton = form.querySelector(submitButtonSelector);
  disableButton(saveButton, rest);
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      validateInput(input, inputErrorClass, errorClass);
      if (hasInvalidInput(formInputs)) {
        disableButton(saveButton, rest);
      } else {
        enableButton(saveButton, rest);
      };
    });
  });
};

const validateInput = (input, inputErrorClass, errorClass) => {
  const errorInputContainer = document.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    errorInputContainer.textContent = '';
    input.classList.remove(inputErrorClass);
    errorInputContainer.classList.remove(errorClass);
  } else {
    errorInputContainer.textContent = input.validationMessage;
    input.classList.add(inputErrorClass);
    errorInputContainer.classList.add(errorClass);
  };
};

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid);
};

const enableButton = (button, {inactiveButtonClass}) => {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled');
};

const disableButton = (button, {inactiveButtonClass}) => { 
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true);
};

enableValidation(validationClasses);