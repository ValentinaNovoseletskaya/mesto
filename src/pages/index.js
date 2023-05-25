import Section from '../components/Section.js'
import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { initialCards, validationSettings } from '../utils/constants.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import '../pages/index.css';

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();
const handleCardClick = function(data){
  popupImage.open(data);
}

const createCardElement = function(data) {
  const card = new Card( data, '.article-template', handleCardClick);
  return card.generateCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCardElement(item));
  }
} , ".elements");

cardList.renderItems();

const userInfo = new UserInfo(".profile__name", ".profile__job");

const handleProfileFormSubmit = function(data) {
  const nameValue = data['profileName'];
  const jobValue = data['profileJob'];
  userInfo.setUserInfo(nameValue, jobValue)
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

const handlePlaceFormSubmit = function(data) {
  const dataCard = {
    name: data['placeName'],
    link: data['placeImage']
  };
  cardList.addItem(createCardElement(dataCard));
};

const popupWhithPlace  = new PopupWithForm(".popup_type_place", handlePlaceFormSubmit);
const popupPlaceAddButtonOpen = document.querySelector(".profile__add-button");
popupWhithPlace.setEventListeners();
popupPlaceAddButtonOpen.addEventListener("click", () => {
  popupWhithPlace.open();
});

const profileForm = document.querySelector('.popup__content-profileForm');
const placeForm = document.querySelector('.popup__content-placeForm');

const profileFormValidator = new FormValidator(profileForm, validationSettings);
const placeFormValidator = new FormValidator(placeForm, validationSettings);
 
profileFormValidator.enableValidation();
placeFormValidator.enableValidation();