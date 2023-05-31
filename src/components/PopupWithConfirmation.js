import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleDeleteConfirmation) {
        super(popupSelector);
        this._popupImageElement = this._popup.querySelector(".popup__image-element");
        this._popupImageTitle = this._popup.querySelector(".popup__image-title");
        this._popupConfirmationButton = this._popup.querySelector(".popup__confirm-button");
        this._handleDeleteConfirmation = handleDeleteConfirmation;
    }

    open(card) { 
        this._cardToDelete = card;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();       
        this._popupConfirmationButton.addEventListener('click', this._handleDeleteConfirmation.bind(this)); 
    }
}