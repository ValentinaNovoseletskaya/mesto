import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleDeleteConfirmation) {
        super(popupSelector);
        this._popupConfirmationButton = this._popup.querySelector(".popup__confirm-button");
        this._handleDeleteConfirmation = handleDeleteConfirmation;
    }

    open(card) { 
        this.cardToDeleteId = card.id;
        this.cardToDelete = card._card;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupConfirmationButton.addEventListener('click', this._handleDeleteConfirmation.bind(this));
    }
}