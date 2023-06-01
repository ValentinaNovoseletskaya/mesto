import Section from '../components/Section.js'
import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { validationSettings, apiSettings } from '../utils/constants.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import '../pages/index.css';

const headers = {
  authorization: apiSettings.token,
  "Content-Type": "application/json"
}

const baseUrl = apiSettings.host + apiSettings.cohortId;

const api = new Api(baseUrl, headers);

const cardList = new Section({ 
  renderer: (item) => {
    cardList.addItem(createCardElement(item));
  }
}
, ".elements");

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();
const handleCardClick = function(card) {
  popupImage.open(card);
}

const handleDeleteConfirmation = function(popup) {
  api.removeCard(popup.cardToDeleteId).then(() => {
    popup.cardToDelete.remove();
    popup.close();
  }) 
  .catch((err) => {
    console.log(err);
  });
} 

const popupConfirmation= new PopupWithConfirmation(".popup_type_confirmation", () => handleDeleteConfirmation(popupConfirmation));
popupConfirmation.setEventListeners();
const userInfo = new UserInfo(".profile__name", ".profile__job", ".profile__avatar-img");

const addLike = function(card) {
    api.addCardLike(card.id).then((res) => {
      card.updateLikeCount( res.likes.length);
      card.likeCard(true);
    })
    .catch((err) => {
      console.log(err);
    });
}

const deleteLike = function(card) {
    api.deteleCardLike(card.id).then((res) => {
      card.updateLikeCount( res.likes.length);
      card.likeCard(false);
    })
    .catch((err) => {
      console.log(err);
    });
 
}

const handleLikeClick = function(card) {
  if (card.isLiked()) {
    deleteLike(card)
  } else {
    addLike(card)
  }  
}

const handleDeleteClick = function(card) {
  popupConfirmation.open(card);
}

const createCardElement = function(data) {  
  const card = new Card(data, '.article-template', {
    handleCardClick: () => handleCardClick(card), 
    handleLikeClick: () => handleLikeClick(card), 
    handleDeleteClick: () => handleDeleteClick(card)
  });
  const user = userInfo.getUserInfo();
  card.hasMyLike(user.id);
  card.canUserDelete(user.id);
  return card.generateCard();
}

const handleSubmit = function(request, popupInstance, loadingText = "Сохранение...") {
  popupInstance.renderLoading(true, loadingText);
  request()
    .then(() => {
      popupInstance.close()
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupInstance.renderLoading(false);
    });
}

const handleProfileFormSubmit = function(data) {
  const user = {
    name: data['profileName'],
    about: data['profileJob']
  }  
  function makeRequest() { 
    return api.editUserInfo(user).then((userData) => {
      userInfo.setUserInfo(userData)
    });
  }
    handleSubmit(makeRequest, popupWithUser);
}

const popupWithUser = new PopupWithForm(".popup_type_profile", handleProfileFormSubmit);
const popupProfileButtonOpen = document.querySelector(".profile__edit-button");

popupWithUser.setEventListeners();
popupProfileButtonOpen.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  const data = {
    profileName: currentUser.name,
    profileJob: currentUser.about
  } 
  popupWithUser.setInputValues(data)
  popupWithUser.open();
});

const handleAvatarFormSubmit = function(data) { 
  const user = { 
    avatar: data['profileAvatar']
  } 
  function makeRequest() { 
    return api.editUserAvatar(user).then((userData) => {
      userInfo.setUserInfo(userData)
    });
  }
    handleSubmit(makeRequest, popupWithAvatar);
}

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
  function makeRequest() { 
    return api.createNewCard(dataCard).then((cardData) => {
      cardList.addItem(createCardElement(cardData));
    });
  }
    handleSubmit(makeRequest, popupWithPlace);
}

const popupWithPlace  = new PopupWithForm(".popup_type_place", handlePlaceFormSubmit);
const popupPlaceAddButtonOpen = document.querySelector(".profile__add-button");
  popupWithPlace.setEventListeners();
  popupPlaceAddButtonOpen.addEventListener("click", () => {
  popupWithPlace.open();
});

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationSettings);

api.getAppInfo().then(([userData, initialCards]) => {
  userInfo.setUserInfo(userData);
  initialCards.reverse();
  cardList.renderItems(initialCards);
})
.catch((err) => {
  console.log(err);
});