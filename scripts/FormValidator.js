export class FormValidator { 

    constructor(formElement, settings) {        
        this._formElement = formElement;
        this._settings = settings;
    };

    _validateInput = (input, inputErrorClass, errorClass) => {
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

    _disableButton = (button, {inactiveButtonClass}) => { 
        button.classList.add(inactiveButtonClass);
        button.setAttribute('disabled', true);
    };

    _hasInvalidInput = (formInputs) => {
        return formInputs.some(item => !item.validity.valid);
      };
      
    _enableButton = (button, {inactiveButtonClass}) => {
        button.classList.remove(inactiveButtonClass);
        button.removeAttribute('disabled');
    };

    _setEventListeners = (form, {inputSelector, submitButtonSelector, inputErrorClass, errorClass, ...rest}) => { 
        const formInputs = Array.from(form.querySelectorAll(inputSelector));
        const saveButton = form.querySelector(submitButtonSelector);
        this._disableButton(saveButton, rest);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._disableButton(saveButton, rest);
        });
        formInputs.forEach(input => {
            input.addEventListener('input', () => {
            this._validateInput(input, inputErrorClass, errorClass);
            if (this._hasInvalidInput(formInputs)) {
                this._disableButton(saveButton, rest);
            } else {
                this._enableButton(saveButton, rest);
            };
            });
        });
    };

    enableValidation() {
        this._setEventListeners(this._formElement, this._settings);
    };
}