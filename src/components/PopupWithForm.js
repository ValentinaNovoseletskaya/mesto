import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._popupForm = this._popup.querySelector("form");
        this._popupSubmitButton = this._popup.querySelector('.popup__save-button');
        this._popupSubmitButtonText = this._popupSubmitButton.textContent;
    }

    close() {
        super.close();
        this._popupForm.reset();
        this._popupSubmitButton.textContent = this._popupSubmitButtonText
    }

    _getInputValues() {
        const formData = new FormData(this._popupForm);
        const values = {};
        for (let [name, value] of formData.entries()) {
          values[name] = value;
        }
        return values;
    }

    setLoadingText() {         
        this._popupSubmitButton.textContent = 'Сохранение...'
    }

    setEventListeners() {
        super.setEventListeners();      
        this._popupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this._formSubmit(this._getInputValues());
        });
    }
}