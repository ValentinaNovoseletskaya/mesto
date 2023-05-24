import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        this._link = data.link;
        this._name = data.name;
        this._popupImageElement = this._popup.querySelector(".popup__image-element");
        this._popupImageTitle = this._popup.querySelector(".popup__image-title");
    }

    open() {
        this._popupImageElement.src = this._link;
        this._popupImageElement.alt = this._name;
        this._popupImageTitle.textContent = this._name;
        super.open();
    }
}