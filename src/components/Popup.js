export default class Popup {
    constructor(popupSelector) { 
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector(".popup__close-button");
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    }

    _closePopupOverlay(evt) { 
        if (evt.target !== evt.currentTarget) {
            return;
        };
        this.close();
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', () => {
            this.close();
        });
        this._popup.addEventListener('click', (evt) => {
            this._closePopupOverlay(evt);
        });
    }
}