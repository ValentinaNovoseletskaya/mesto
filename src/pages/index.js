// Внутри основного файла index.js
// - Все экземпляры класса создать заранее
// - В конце файла вызвать метод getAppInfo, который вернет вам данные по всем карточкам и данные пользователя. Внутри then этого метода вы можете, имея доступ ко всем нужным начальным данным отрисовать начальные карточки (через метод renderItems экземпляра класса Section), а также добавить данные пользователя (через метод setUserInfo экземпляра класса UserInfo)
// - обратите внимание, что создание экземпляра класса Section не требует передачи массива начальных карточек в конструктор - их надо передавать как аргумент самого метода renderItems

import Section from '../components/Section.js'
import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import {  validationSettings } from '../utils/constants.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import '../pages/index.css';

export const api = new Api({
  host: 'https://mesto.nomoreparties.co/v1/', 
  token: 'e80de601-eadc-4261-9de7-7dde09fbf72f',
  cohortId: 'cohort-66'
});

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();
const handleCardClick = function(data){
  popupImage.open(data);
}

const handleDeleteConfirmation = function(){
  api.removeCard(this._cardToDelete._id ).then( () => {
    this._cardToDelete._card.remove()
    this.close();
  }) 
  .catch((err) => {
    console.log(err);
  }); 
}
 

const popupConfirmation= new PopupWithConfirmation(".popup_type_confirmation", handleDeleteConfirmation);
popupConfirmation.setEventListeners();
 

const userInfo = new UserInfo(".profile__name", ".profile__job", ".profile__avatar-img");

const handleLikeClick = function(){
  if (this._likeButton.classList.contains("element__like-button_active")) {
    this._likeButton.classList.remove("element__like-button_active")
    api.deteleCardLike(this._id).then((res) => {
      this._likecount.textContent = res.likes.length;
    })
    .catch((err) => {
      console.log(err);
    }); 
    return;
  }
  this._likeButton.classList.add("element__like-button_active");
  api.addCardLike(this._id).then((res) => {
    this._likecount.textContent = res.likes.length;

  })
  .catch((err) => {
    console.log(err);
  });
}

const handleDeleteClick = function(card){
  popupConfirmation.open(card);
}
const createCardElement = function(data) {
  const card = new Card(data, '.article-template', {
    handleCardClick: () => handleCardClick, 
    handleLikeClick: () => handleLikeClick, 
    handleDeleteClick: () => handleDeleteClick(card)
  });
  const user = userInfo.getUserInfo(); 
  card.hasMyLike(user.id);
  card.canUserDelete(user.id);
  return card.generateCard();
}

const cardList = new Section({ 
    renderer: (item) => {
      cardList.addItem(createCardElement(item));
    }
  }
 , ".elements");


const handleProfileFormSubmit = function(data) {
  const user = {
    name: data['profileName'],
    about: data['profileJob']
  }
  api.editUserInfo(user).then((res) => {
    userInfo.setUserInfo(res) 
  })
  .catch((err) => {
    console.log(err);
  }); 
};

const popupWithUser = new PopupWithForm(".popup_type_profile", handleProfileFormSubmit);
const popupProfile = document.querySelector(".popup_type_profile");
const nameInput = popupProfile.querySelector("[name='profileName']");
const jobInput = popupProfile.querySelector("[name='profileJob']");
const popupProfileButtonOpen = document.querySelector(".profile__edit-button");


popupWithUser.setEventListeners();
popupProfileButtonOpen.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  nameInput.value = currentUser.name;
  jobInput.value = currentUser.about;
  popupWithUser.open();
});


const handleAvatarFormSubmit = function(data) {
  const user = { 
    avatar: data['profileAvatar']
  }
  userInfo.setUserInfo(user)
  api.editUserAvatar(user); 
  
};

const popupWithAvatar = new PopupWithForm(".popup_type_avatar", handleAvatarFormSubmit);
popupWithAvatar.setEventListeners();
const popupAvatarButtonOpen = document.querySelector(".profile__avatar");
popupAvatarButtonOpen.addEventListener("click", () => {
  popupWithAvatar.open();
  
});

const handlePlaceFormSubmit = function(data) {  
  const dataCard = {
    name: data['placeName'],
    link: data['placeImage'],
    likes: []
  };
  api.createNewCard(dataCard).then((res) => {
    cardList.addItem(createCardElement(res));
  })
  .catch((err) => {
    console.log(err);
  });
  
};

const popupWithPlace  = new PopupWithForm(".popup_type_place", handlePlaceFormSubmit);
const popupPlaceAddButtonOpen = document.querySelector(".profile__add-button");
  popupWithPlace.setEventListeners();
  popupPlaceAddButtonOpen.addEventListener("click", () => {
  popupWithPlace.open();
});

const profileForm = document.querySelector('.popup__content-profileForm');
const placeForm = document.querySelector('.popup__content-placeForm');
const avatarForm = document.querySelector('.popup__content-AvatarForm');

const profileFormValidator = new FormValidator(profileForm, validationSettings);
const placeFormValidator = new FormValidator(placeForm, validationSettings);
const avatarFormValidator = new FormValidator(avatarForm, validationSettings);
 
profileFormValidator.enableValidation();
placeFormValidator.enableValidation();
avatarFormValidator.enableValidation();

 
api.getInitialCards().then( (res) => {
  
});

api.getAppInfo().then( (res) => {
  const userData = res[0];
  const initialCards = res[1]; 
  userInfo.setUserInfo(userData);
  initialCards.reverse(); 
  cardList.renderItems(initialCards);  
});