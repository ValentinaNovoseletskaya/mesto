const closePopup = function(elementName) {
  elementName.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
} 
const openPopup = function(elementName) {
  elementName.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape);
}

const cardList = document.querySelector(".elements");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");
const popupProfileButtonOpen = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_profile");
const popupProfileCloseButton = popupProfile.querySelector(".popup__close-button");
const nameInput = popupProfile.querySelector("[name='profileName']");
const jobInput = popupProfile.querySelector("[name='profileJob']");
const popupProfileButtonSave = popupProfile.querySelector(".popup__save-button");
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

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const handleProfileFormSubmit = function(event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  nameProfile.textContent = nameValue;
  const jobValue = jobInput.value;
  jobProfile.textContent = jobValue;
  closePopup(popupProfile);
}

const handleCloseProfilePopup = function() {
  closePopup(popupProfile);
}

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

const openProfilePopup = function() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile);
}

popupProfileButtonOpen.addEventListener("click", openProfilePopup);

const popupPlaceAddButtonOpen = document.querySelector(".profile__add-button");
const popupPlace = document.querySelector(".popup_type_place");
const popupPlaceCloseButton = popupPlace.querySelector(".popup__close-button");
const placeInput = popupPlace.querySelector("[name='placeName']");
const imageInput = popupPlace.querySelector("[name='placeImage']");
const popupPlaceButtonSave = popupPlace.querySelector(".popup__save-button");
const popupPlaceForm = popupPlace.querySelector(".popup__content");

const handlePlaceFormSubmit = function(event) {
  event.preventDefault();
  const placeValue = placeInput.value;
  const imageValue = imageInput.value;
  cardList.prepend(createCard(placeValue, imageValue));
  closePopup(popupPlace);
  event.target.reset();
}

const handleClosePlacePopup = function() {
  closePopup(popupPlace);
}

popupPlaceForm.addEventListener('submit', handlePlaceFormSubmit);

const openPlacePopup = function() {
  openPopup(popupPlace);
}

popupPlaceAddButtonOpen.addEventListener("click", openPlacePopup);

const likeArticle = function(event) {        
  if (event.target.classList.contains("element__like-button_active")) {
    event.target.classList.remove("element__like-button_active")  
    return;
  }
  event.target.classList.add("element__like-button_active")
}

const deleteArticle = function(event) {
  const card = event.target.closest(".element");
  card.remove();
}

const cardTemplate = document.querySelector(".article-template").content.querySelector('.element');
const popupImage = document.querySelector(".popup_type_image");
const popupImageCloseButton = popupImage.querySelector(".popup__close-button");
const popupImageElement = document.querySelector(".popup__image-element");
const popupImageTitle = document.querySelector(".popup__image-title");

const openImagePopup = function(event) { 
  popupImageElement.src = event.target.src;
  popupImageElement.alt = event.target.alt;
  popupImageTitle.textContent = event.target.alt;
  openPopup(popupImage);
}

const handleCloseImagePopup = function() {
  closePopup(popupImage);
}

const createCard = function(name, link){
  const cardElement = cardTemplate.cloneNode(true);
  const pictureElement = cardElement.querySelector(".element__picture");
  cardElement.querySelector(".element__text").textContent = name;
  pictureElement.src = link;
  pictureElement.alt = name;
  cardElement.querySelector(".element__like-button").addEventListener("click", likeArticle);
  cardElement.querySelector(".element__delete-button").addEventListener("click", deleteArticle);
  pictureElement.addEventListener("click", openImagePopup);
  return cardElement;
}

initialCards.forEach(function(element) {
  cardList.prepend(createCard(element.name, element.link));
});


