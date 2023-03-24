let popupCloseButtons = document.querySelectorAll(".popup__close-button");
let closePopup = function(event) {
    event.target.closest(".popup").classList.remove("popup_opened")
}
popupCloseButtons.forEach(function (i) {
    i.addEventListener("click", closePopup);
});

let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__job");

let popupProfileButtonOpen = document.querySelector(".profile__edit-button");
let popupProfileElement = document.querySelector(".popup_type_profile");
let nameInput = popupProfileElement.querySelector("[name='profileName']");
let jobInput = popupProfileElement.querySelector("[name='profileJob']");
let popupProfileButtonSave = popupProfileElement.querySelector(".popup__save-button");
let popupProfileForm = popupProfileElement.querySelector(".popup__content");

function handleProfileFormSubmit (event) {
    event.preventDefault();
    let nameValue = nameInput.value;
    nameProfile.textContent = nameValue;
    let jobValue = jobInput.value;
    jobProfile.textContent = jobValue;
    closePopup(event);
}

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

let openProfilePopup = function() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    popupProfileElement.classList.add("popup_opened")
}

popupProfileButtonOpen.addEventListener("click", openProfilePopup);

let popupPlaceButtonOpen = document.querySelector(".profile__add-button");
let popupPlaceElement = document.querySelector(".popup_type_place");
let placeInput = popupPlaceElement.querySelector("[name='placeName']");
let imageInput = popupPlaceElement.querySelector("[name='placeImage']");
let popupPlaceButtonSave = popupPlaceElement.querySelector(".popup__save-button");
let popupPlaceForm = popupPlaceElement.querySelector(".popup__content");

function handlePlaceFormSubmit (event) {
    event.preventDefault();
    let placeValue = placeInput.value;
    let imageValue = imageInput.value;
    let card = [];
    card.name = placeValue;
    card.link = imageValue;
    renderCard(card);
    closePopup(event);
}

popupPlaceForm.addEventListener('submit', handlePlaceFormSubmit);

let openPlacePopup = function() {
    popupPlaceElement.classList.add("popup_opened")
}

popupPlaceButtonOpen.addEventListener("click", openPlacePopup);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

let likeArticle = function(event) {
        
    if (event.target.classList.contains("element__like-button_active")) {
        event.target.classList.remove("element__like-button_active")  
        return;
    }
    event.target.classList.add("element__like-button_active")
}

function deleteArticle (event) {
    const card = event.target.closest(".element");
    card.remove();
}

const cardTemplate = document.querySelector(".article-template").content;
const cardList = document.querySelector(".elements");

let popupImageElement = document.querySelector(".popup_type_image");
let openImagePopup = function(event) {
 
    popupImageElement.classList.add("popup_opened");
    popupImageElement.querySelector(".popup__image-element").src = event.target.src;
    popupImageElement.querySelector(".popup__image-title").textContent = event.target.alt;
}

function renderCard(card) {
    const htmlElement = cardTemplate.cloneNode(true);
    htmlElement.querySelector(".element__text").textContent = card.name;
    htmlElement.querySelector(".element__picture").src = card.link;
    htmlElement.querySelector(".element__picture").alt = card.name;
    htmlElement.querySelector(".element__like-button").addEventListener("click", likeArticle);
    htmlElement.querySelector(".element__delete-button").addEventListener("click", deleteArticle);
    htmlElement.querySelector(".element__picture").addEventListener("click", openImagePopup);
    cardList.prepend(htmlElement);
}

initialCards.forEach(renderCard);