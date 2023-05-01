import { closePopup, openPopup } from './utils.js'

export class Card {
  constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };

  _setEventListeners() {
    this._card.querySelector('.element__like-button').addEventListener('click', () => {
      this._likeArticle();
    });
    this._card.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteArticle();
    });
    this._card.querySelector('.element__picture').addEventListener('click', () => {
      this._openImagePopup();
    });
  };
 
  _likeArticle() {
    if (this._card.querySelector('.element__like-button').classList.contains("element__like-button_active")) {
      this._card.querySelector('.element__like-button').classList.remove("element__like-button_active")
      return;
    }
    this._card.querySelector('.element__like-button').classList.add("element__like-button_active")
  };

  _deleteArticle() {
    this._card.remove();
  };

  _openImagePopup() {
    const popupImage = document.querySelector(".popup_type_image");
    const popupImageElement = document.querySelector(".popup__image-element");
    const popupImageTitle = document.querySelector(".popup__image-title");

    popupImageElement.src = this._link;
    popupImageElement.alt = this._name;
    popupImageTitle.textContent = this._name;
    openPopup(popupImage);
  };

  generateCard(){
    this._card = this._getTemplate();
    this._card.querySelector(".element__text").textContent = this._name;
    this._card.querySelector(".element__picture").src = this._link;
    this._card.querySelector(".element__picture").alt = this._name;
    this._setEventListeners();

    return this._card;
  };
} 