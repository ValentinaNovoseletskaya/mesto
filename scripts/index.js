import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { initialCards, closePopup, openPopup } from './utils.js'

const cardList = document.querySelector(".elements");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");
const popupProfileButtonOpen = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_profile");
const nameInput = popupProfile.querySelector("[name='profileName']");
const jobInput = popupProfile.querySelector("[name='profileJob']");
const popupProfileForm = popupProfile.querySelector(".popup__content");
const popups = document.querySelectorAll(".popup");
const сloseButtons = document.querySelectorAll(".popup__close-button");

сloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

const closePopupOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  };
    closePopup(event.currentTarget);
};

popups.forEach(e => {e.addEventListener('click', closePopupOverlay)});

const handleProfileFormSubmit = function(event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  nameProfile.textContent = nameValue;
  const jobValue = jobInput.value;
  jobProfile.textContent = jobValue;
  closePopup(popupProfile);
};

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

const openProfilePopup = function() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile);
};

popupProfileButtonOpen.addEventListener("click", openProfilePopup);

const popupPlaceAddButtonOpen = document.querySelector(".profile__add-button");
const popupPlace = document.querySelector(".popup_type_place");
const placeInput = popupPlace.querySelector("[name='placeName']");
const imageInput = popupPlace.querySelector("[name='placeImage']");
const popupPlaceForm = popupPlace.querySelector(".popup__content");

const handlePlaceFormSubmit = function(event) {
  event.preventDefault();
  const data = {
    name: placeInput.value,
    link: imageInput.value
  };
  const card = new Card( data, '.article-template');
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
  closePopup(popupPlace);
  event.target.reset();
};

popupPlaceForm.addEventListener('submit', handlePlaceFormSubmit);

const openPlacePopup = function() {
  openPopup(popupPlace);
};

popupPlaceAddButtonOpen.addEventListener("click", openPlacePopup);

initialCards.forEach(function(element) {
  const card = new Card(element, '.article-template');
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
});

const validationSettings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const profileForm = document.querySelector('.popup__content-profileForm');
const placeForm = document.querySelector('.popup__content-placeForm');

const profileFormValidator = new FormValidator(profileForm, validationSettings);
const placeFormValidator = new FormValidator(placeForm, validationSettings);
 
profileFormValidator.enableValidation();
placeFormValidator.enableValidation();