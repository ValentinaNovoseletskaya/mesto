export default class Card {
  constructor(data, templateSelector, {handleCardClick, handleLikeClick, handleDeleteClick }) {
      this.id = data._id;
      this.name = data.name;
      this.link = data.link;
      this._likes = data.likes;
      this._ownerId = data.owner._id;
      this._handleCardClick = handleCardClick;
      this._handleLikeClick = handleLikeClick;
      this._handleDeleteClick = handleDeleteClick;
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
    this._likeButton.addEventListener('click', this._handleLikeClick.bind(this));
    this._deleteButton.addEventListener('click', this._handleDeleteClick.bind(this));
    this._cardPicture.addEventListener("click", () => {
      this._handleCardClick( { name: this.name, link: this.link} );
    });
  };

  hasMyLike(userId) {
    const isLikedByMe = this._likes.find((user) => { 
      return user._id === userId;
    })
    if (isLikedByMe) { 
      this._isLikedByMe = true;
    } else {
      this._isLikedByMe = false;
    }
  }

  isLiked() {
    return (this._likeButton.classList.contains("element__like-button_active"))
  }

  likeCard(isLiked) {
    if (isLiked) {
      this._likeButton.classList.add("element__like-button_active");
    } else {
      this._likeButton.classList.remove("element__like-button_active");
    }    
  }

  canUserDelete(userId) {
    const isLikedByMe = this._ownerId === userId;
    if (isLikedByMe) { 
      this._isDeletableByMe = true;
    } else {      
      this._isDeletableByMe = false;
    }    
  }

  updateLikeCount(count) {
    this._likecount.textContent = count;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector(".element__text").textContent = this.name;
    this._cardPicture = this._card.querySelector(".element__picture");
    this._cardPicture.src = this.link;
    this._cardPicture.alt = this.name;
    this._likecount = this._card.querySelector(".element__count");
    this.updateLikeCount( this._likes.length);
    this._likeButton = this._card.querySelector(".element__like-button");
    this._deleteButton = this._card.querySelector(".element__delete-button");
    if (this._isLikedByMe) { 
      this._likeButton.classList.add("element__like-button_active");
    } 
    if (this._isDeletableByMe) { 
      this._deleteButton.classList.add("element_visible");
    }    
    this._setEventListeners();
    return this._card;
  };
} 