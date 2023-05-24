import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._popupForm = this._popup.querySelector("form");
        
        
    }

    close(){
        super.close();
        this._popupForm.reset();
    }

    _getInputValues() {
        this._formData = new FormData(this._popupForm);
        const values = {};
        for (let [name, value] of this._formData.entries()) {
          values[name] = value;
        }
        return values;
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this._formSubmit(this._getInputValues());
            this.close();
        });
 
    }
}