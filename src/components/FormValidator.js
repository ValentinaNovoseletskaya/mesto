export class FormValidator {

    constructor(formElement, settings) {
        this._formElement = formElement;
        this._formInputs = Array.from(this._formElement.querySelectorAll(settings.inputSelector));
        this._saveButton = this._formElement.querySelector(settings.submitButtonSelector);
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
    };

    _validateInput = (input) => {
        const errorInputContainer = document.querySelector(`#${input.id}-error`);
        if (input.checkValidity()) {
          errorInputContainer.textContent = '';
          input.classList.remove(this._inputErrorClass);
          errorInputContainer.classList.remove(this._errorClass);
        } else {
          errorInputContainer.textContent = input.validationMessage;
          input.classList.add(this._inputErrorClass);
          errorInputContainer.classList.add(this._errorClass);
        };
    };

    _disableButton = () => { 
        this._saveButton.classList.add(this._inactiveButtonClass);
        this._saveButton.setAttribute('disabled', true);
    };

    _hasInvalidInput = () => {
        return this._formInputs.some(item => !item.validity.valid);
    };
      
    _enableButton = () => {
        this._saveButton.classList.remove(this._inactiveButtonClass);
        this._saveButton.removeAttribute('disabled');
    };

    _setEventListeners = () => {    
        this._disableButton();
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._disableButton();
        });
        this._formInputs.forEach(input => {
            input.addEventListener('input', () => {
            this._validateInput(input);
            if (this._hasInvalidInput()) {
                this._disableButton();
            } else {
                this._enableButton();
            };
            });
        });
    };

    enableValidation() {
        this._setEventListeners();
    };
}