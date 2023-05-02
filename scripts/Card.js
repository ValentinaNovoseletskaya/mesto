import { openPopup } from './utils.js'

export class Card {
  constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._popupImage = document.querySelector(".popup_type_image");
      this._popupImageElement = document.querySelector(".popup__image-element");
      this._popupImageTitle = document.querySelector(".popup__image-title");
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  };

  _setEventListeners() {
    this._card.querySelector(".element__like-button").addEventListener('click', () => {
      this._likeArticle();
    });
    this._card.querySelector(".element__delete-button").addEventListener('click', () => {
      this._deleteArticle();
    });
    this._cardPicture.addEventListener("click", () => {
      this._openImagePopup();
    });
  };
 
  _likeArticle() {
    if (this._card.querySelector(".element__like-button").classList.contains("element__like-button_active")) {
      this._card.querySelector(".element__like-button").classList.remove("element__like-button_active")
      return;
    }
    this._card.querySelector(".element__like-button").classList.add("element__like-button_active")
  };

  _deleteArticle() {
    this._card.remove();
  };

  _openImagePopup() {
    this._popupImageElement.src = this._link;
    this._popupImageElement.alt = this._name;
    this._popupImageTitle.textContent = this._name;
    openPopup(this._popupImage);
  };

  generateCard(){
    this._card = this._getTemplate();
    this._card.querySelector(".element__text").textContent = this._name;
    this._cardPicture = this._card.querySelector(".element__picture");
    this._cardPicture.src = this._link;
    this._cardPicture.alt = this._name;
    this._setEventListeners();

    return this._card;
  };
} 