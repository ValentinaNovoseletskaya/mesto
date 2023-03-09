let popupElement = document.querySelector(".popup");
let popupButtonOpen = document.querySelector(".profile__edit-button");
let popupButtonClose = popupElement.querySelector(".popup__close-button");
let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__job");
let nameInput = popupElement.querySelector("[name='profileName']");
let jobInput = popupElement.querySelector("[name='profileJob']");
let popupButtonSave = popupElement.querySelector(".popup__save-button");
let popupForm = popupElement.querySelector(".popup__content");

function handleFormSubmit (event) {
    event.preventDefault();
    let nameValue = nameInput.value;
    nameProfile.textContent = nameValue;
    let jobValue = jobInput.value;
    jobProfile.textContent = jobValue;
    closePopup();
}

popupForm.addEventListener('submit', handleFormSubmit);


let openPopup = function() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    popupElement.classList.add("popup_opened")
}

let closePopup = function() {
    popupElement.classList.remove("popup_opened")
}

popupButtonOpen.addEventListener("click", openPopup);
popupButtonClose.addEventListener("click", closePopup);