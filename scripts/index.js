const closePopup = function(className) {
  document.querySelector(className).classList.remove("popup_opened")
} 
const openPopup = function(className){
  document.querySelector(className).classList.add("popup_opened");
}

const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");
const popupProfileButtonOpen = document.querySelector(".profile__edit-button");
const popupProfileElement = document.querySelector(".popup_type_profile");
const popupProfileCloseButton = document.querySelector(".popup_type_profile .popup__close-button");
const nameInput = popupProfileElement.querySelector("[name='profileName']");
const jobInput = popupProfileElement.querySelector("[name='profileJob']");
const popupProfileButtonSave = popupProfileElement.querySelector(".popup__save-button");
const popupProfileForm = popupProfileElement.querySelector(".popup__content");

const handleProfileFormSubmit = function(event) {
    event.preventDefault();
    const nameValue = nameInput.value;
    nameProfile.textContent = nameValue;
    const jobValue = jobInput.value;
    jobProfile.textContent = jobValue;
    closePopup('.popup_type_profile');
}

const handleCloseProfilePopup = function(){
  closePopup('.popup_type_profile');
}

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
popupProfileCloseButton.addEventListener('click', handleCloseProfilePopup);

const openProfilePopup = function() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openPopup('.popup_type_profile');
}

popupProfileButtonOpen.addEventListener("click", openProfilePopup);

const popupPlaceButtonOpen = document.querySelector(".profile__add-button");
const popupPlaceElement = document.querySelector(".popup_type_place");
const popupPlaceCloseButton = document.querySelector(".popup_type_place .popup__close-button");
const placeInput = popupPlaceElement.querySelector("[name='placeName']");
const imageInput = popupPlaceElement.querySelector("[name='placeImage']");
const popupPlaceButtonSave = popupPlaceElement.querySelector(".popup__save-button");
const popupPlaceForm = popupPlaceElement.querySelector(".popup__content");

const handlePlaceFormSubmit = function(event) {
    event.preventDefault();
    const placeValue = placeInput.value;
    const imageValue = imageInput.value;
    const card = {};
    card.name = placeValue;
    card.link = imageValue;
    renderCard(card);
    placeInput.value = '';
    imageInput.value = '';
    closePopup('.popup_type_place');
}

const handleClosePlacePopup = function(){
  closePopup('.popup_type_place');
}

popupPlaceForm.addEventListener('submit', handlePlaceFormSubmit);
popupPlaceCloseButton.addEventListener("click", handleClosePlacePopup);

const openPlacePopup = function() {
      openPopup('.popup_type_place');
}

popupPlaceButtonOpen.addEventListener("click", openPlacePopup);

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
const cardList = document.querySelector(".elements");
const popupImage = document.querySelector(".popup_type_image");
const popupImageCloseButton = document.querySelector(".popup_type_image .popup__close-button");
const popupImageElement = document.querySelector(".popup__image-element");
const popupImageTitle = document.querySelector(".popup__image-title");

const openImagePopup = function(event) { 
    popupImageElement.src = event.target.src;
    popupImageElement.alt = event.target.alt;
    popupImageTitle.textContent = event.target.alt;
    openPopup('.popup_type_image');
}

const handleCloseImagePopup = function(){
  closePopup('.popup_type_image');
}

popupImageCloseButton.addEventListener("click", handleCloseImagePopup);

function renderCard(card) {
    const htmlElement = cardTemplate.cloneNode(true);
    const pictureElement = htmlElement.querySelector(".element__picture");
    htmlElement.querySelector(".element__text").textContent = card.name;
    pictureElement.src = card.link;
    pictureElement.alt = card.name;
    htmlElement.querySelector(".element__like-button").addEventListener("click", likeArticle);
    htmlElement.querySelector(".element__delete-button").addEventListener("click", deleteArticle);
    pictureElement.addEventListener("click", openImagePopup);
    cardList.prepend(htmlElement);
}

initialCards.forEach(renderCard);