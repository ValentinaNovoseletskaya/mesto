// Внутри основного файла index.js
// - Все экземпляры класса создать заранее
// - В конце файла вызвать метод getAppInfo, который вернет вам данные по всем карточкам и данные пользователя. Внутри then этого метода вы можете, имея доступ ко всем нужным начальным данным отрисовать начальные карточки (через метод renderItems экземпляра класса Section), а также добавить данные пользователя (через метод setUserInfo экземпляра класса UserInfo)
// - обратите внимание, что создание экземпляра класса Section не требует передачи массива начальных карточек в конструктор - их надо передавать как аргумент самого метода renderItems

import Section from '../components/Section.js'
import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { validationSettings } from '../utils/constants.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import '../pages/index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'e80de601-eadc-4261-9de7-7dde09fbf72f',
    'Content-Type': 'application/json'
  }
});

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();
const handleCardClick = function(data){
  popupImage.open(data);
}

const createCardElement = function(data) {
  const card = new Card( data, '.article-template', handleCardClick);
  return card.generateCard();
}

api.getInitialCards().then((res) => {
    const cardList = new Section({
      items: res,
      renderer: (item) => {
        cardList.addItem(createCardElement(item));
      }
    } , ".elements");    
    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  }); 

const userInfo = new UserInfo(".profile__name", ".profile__job", ".profile__avatar-img");

api.getUserInfo().then((res) => {

  console.log(res);
  const user = {
    name: res.name,
    about: res.about,
    avatar: res.avatar,
  }
  
  userInfo.setUserInfo(user) 
})
.catch((err) => {
  console.log(err);
});

const handleProfileFormSubmit = function(data) {
  const user = {
    name: data['profileName'],
    about: data['profileJob']
  }
  userInfo.setUserInfo(user)
  api.editUserInfo(user); 
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
  jobInput.value = currentUser.description;
  popupWithUser.open();
  
});

const handleAvatarFormSubmit = function(data) {
  const User = {
    avatar: data.profileAvatar
  };
  cardList.addItem(createCardElement(dataCard));
};

const popupWithAvatar = new PopupWithForm(".popup_type_avatar", handleAvatarFormSubmit);

const handlePlaceFormSubmit = function(data) {  
  const dataCard = {
    name: data['placeName'],
    link: data['placeImage']
  };
  api.createNewCard(dataCard);
};

const popupWithPlace  = new PopupWithForm(".popup_type_place", handlePlaceFormSubmit);
const popupPlaceAddButtonOpen = document.querySelector(".profile__add-button");
popupWithPlace.setEventListeners();
popupPlaceAddButtonOpen.addEventListener("click", () => {
  popupWithPlace.open();
});

const profileForm = document.querySelector('.popup__content-profileForm');
const placeForm = document.querySelector('.popup__content-placeForm');

const profileFormValidator = new FormValidator(profileForm, validationSettings);
const placeFormValidator = new FormValidator(placeForm, validationSettings);
 
profileFormValidator.enableValidation();
placeFormValidator.enableValidation();
