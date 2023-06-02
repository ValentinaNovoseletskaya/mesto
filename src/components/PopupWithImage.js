import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageElement = this._popup.querySelector(".popup__image-element");
        this._popupImageTitle = this._popup.querySelector(".popup__image-title");
    }

    open(card) {
        this._popupImageElement.src = card.link;
        this._popupImageElement.alt = card.name;
        this._popupImageTitle.textContent = card.name;
        super.open();
    }
}