export default class Card {
  constructor(data, templateSelector, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._handleCardClick = handleCardClick;
      this._templateSelector = templateSelector;
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
      this._handleCardClick( { name: this._name, link: this._link} );
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