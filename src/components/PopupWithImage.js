import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageElement = this._popup.querySelector(".popup__image-element");
        this._popupImageTitle = this._popup.querySelector(".popup__image-title");
    }

    open(data) {
        this._popupImageElement.src = data.link;
        this._popupImageElement.alt = data.name;
        this._popupImageTitle.textContent = data.name;
        super.open();
    }
}