(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){this.clear(),this._renderedItems=t,this._renderedItems.forEach(this._renderer)}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r){var o=r.handleCardClick,i=r.handleLikeClick,u=r.handleDeleteClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e._id,this.name=e.name,this.link=e.link,this._likes=e.likes,this._ownerId=e.owner._id,this._handleCardClick=o,this._handleLikeClick=i,this._handleDeleteClick=u,this._templateSelector=n}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",this._handleLikeClick.bind(this)),this._deleteButton.addEventListener("click",this._handleDeleteClick.bind(this)),this._cardPicture.addEventListener("click",(function(){t._handleCardClick({name:t.name,link:t.link})}))}},{key:"hasMyLike",value:function(t){var e=this._likes.find((function(e){return e._id===t}));this._isLikedByMe=!!e}},{key:"isLiked",value:function(){return this._likeButton.classList.contains("element__like-button_active")}},{key:"likeCard",value:function(t){t?this._likeButton.classList.add("element__like-button_active"):this._likeButton.classList.remove("element__like-button_active")}},{key:"canUserDelete",value:function(t){var e=this._ownerId===t;this._isDeletableByMe=!!e}},{key:"updateLikeCount",value:function(t){this._likecount.textContent=t}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._card.querySelector(".element__text").textContent=this.name,this._cardPicture=this._card.querySelector(".element__picture"),this._cardPicture.src=this.link,this._cardPicture.alt=this.name,this._likecount=this._card.querySelector(".element__count"),this.updateLikeCount(this._likes.length),this._likeButton=this._card.querySelector(".element__like-button"),this._deleteButton=this._card.querySelector(".element__delete-button"),this._isLikedByMe&&this._likeButton.classList.add("element__like-button_active"),this._isDeletableByMe&&this._deleteButton.classList.add("element_visible"),this._setEventListeners(),this._card}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function l(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_validateInput",(function(t){var e=document.querySelector("#".concat(t.id,"-error"));t.checkValidity()?(e.textContent="",t.classList.remove(r._inputErrorClass),e.classList.remove(r._errorClass)):(e.textContent=t.validationMessage,t.classList.add(r._inputErrorClass),e.classList.add(r._errorClass))})),l(this,"_disableButton",(function(){r._saveButton.classList.add(r._inactiveButtonClass),r._saveButton.setAttribute("disabled",!0)})),l(this,"_hasInvalidInput",(function(){return r._formInputs.some((function(t){return!t.validity.valid}))})),l(this,"_enableButton",(function(){r._saveButton.classList.remove(r._inactiveButtonClass),r._saveButton.removeAttribute("disabled")})),l(this,"_setEventListeners",(function(){r._disableButton(),r._formElement.addEventListener("reset",r._disableButton.bind(r)),r._formInputs.forEach((function(t){t.addEventListener("input",(function(){r._validateInput(t),r._hasInvalidInput()?r._disableButton():r._enableButton()}))}))})),this._formElement=e,this._formInputs=Array.from(this._formElement.querySelectorAll(n.inputSelector)),this._saveButton=this._formElement.querySelector(n.submitButtonSelector),this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_closePopupOverlay",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){t._closePopupOverlay(e)}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(r);if(o){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImageElement=e._popup.querySelector(".popup__image-element"),e._popupImageTitle=e._popup.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t){this._popupImageElement.src=t.link,this._popupImageElement.alt=t.name,this._popupImageTitle.textContent=t.name,v(m(u.prototype),"open",this).call(this)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._popupConfirmationButton=n._popup.querySelector(".popup__confirm-button"),n._handleDeleteConfirmation=e,n}return e=u,(n=[{key:"open",value:function(t){this.cardToDeleteId=t.id,this.cardToDelete=t._card,k(E(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){k(E(u.prototype),"setEventListeners",this).call(this),this._popupConfirmationButton.addEventListener("click",this._handleDeleteConfirmation.bind(this))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function O(t,e){if(t){if("string"==typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(t,e):void 0}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._formSubmit=e,n._popupForm=n._popup.querySelector("form"),n._inputList=n._popupForm.querySelectorAll("input"),n._popupSubmitButton=n._popup.querySelector(".popup__save-button"),n._popupSubmitButtonText=n._popupSubmitButton.textContent,n}return e=u,n=[{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"close",value:function(){I(T(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_getInputValues",value:function(){var t,e,n,r={},o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=O(t))){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw i}}}}(new FormData(this._popupForm).entries());try{for(o.s();!(t=o.n()).done;){var i=(e=t.value,n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||O(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],a=i[1];r[u]=a}}catch(t){o.e(t)}finally{o.f()}return r}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._popupSubmitButton.textContent=t?e:this._popupSubmitButtonText}},{key:"setEventListeners",value:function(){var t=this;I(T(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmit(t._getInputValues())}))}}],n&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var U=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileNameElement=document.querySelector(e),this._profileJobElement=document.querySelector(n),this._profileAvatarElement=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{id:this._id,name:this._userName,about:this._userAbout,avatar:this._userAvatar}}},{key:"setUserInfo",value:function(t){var e,n,r,o;this._id=null!==(e=t._id)&&void 0!==e?e:this._id,this._userName=null!==(n=t.name)&&void 0!==n?n:this._userName,this._userAbout=null!==(r=t.about)&&void 0!==r?r:this._userAbout,this._userAvatar=null!==(o=t.avatar)&&void 0!==o?o:this._userAvatar,this._profileNameElement.textContent=this._userName,this._profileJobElement.textContent=this._userAbout,this._profileAvatarElement.src=this._userAvatar}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var M=new(function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=n,this._baseUrl=e}var e,n;return e=t,(n=[{key:"_request",value:function(t,e){return fetch(t,e).then(this.resolveFetch)}},{key:"resolveFetch",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return this._request("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"createNewCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards"),{method:"POST",body:JSON.stringify(t),headers:this._headers})}},{key:"getUserInfo",value:function(){return this._request("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"editUserInfo",value:function(t){return this._request("".concat(this._baseUrl,"/users/me"),{method:"PATCH",body:JSON.stringify(t),headers:this._headers})}},{key:"editUserAvatar",value:function(t){return this._request("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify(t),headers:this._headers})}},{key:"addCardLike",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deteleCardLike",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"removeCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())("https://mesto.nomoreparties.co/v1/cohort-66",{authorization:"e80de601-eadc-4261-9de7-7dde09fbf72f","Content-Type":"application/json"}),F=new n({renderer:function(t){F.addItem($(t))}},".elements"),J=new _(".popup_type_image");J.setEventListeners();var V=new j(".popup_type_confirmation",(function(){return t=V,void M.removeCard(t.cardToDeleteId).then((function(){t.cardToDelete.remove(),t.close()})).catch((function(t){console.log(t)}));var t}));V.setEventListeners();var H=new U(".profile__name",".profile__job",".profile__avatar-img"),$=function(t){var e=new i(t,".article-template",{handleCardClick:function(){return function(t){J.open(t)}(e)},handleLikeClick:function(){return function(t){t.isLiked()?function(t){M.deteleCardLike(t.id).then((function(e){t.updateLikeCount(e.likes.length),t.likeCard(!1)})).catch((function(t){console.log(t)}))}(t):function(t){M.addCardLike(t.id).then((function(e){t.updateLikeCount(e.likes.length),t.likeCard(!0)})).catch((function(t){console.log(t)}))}(t)}(e)},handleDeleteClick:function(){return function(t){V.open(t)}(e)}}),n=H.getUserInfo();return e.hasMyLike(n.id),e.canUserDelete(n.id),e.generateCard()},z=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";e.renderLoading(!0,n),t().then((function(){e.close()})).catch((function(t){console.error("Ошибка: ".concat(t))})).finally((function(){e.renderLoading(!1)}))},G=new A(".popup_type_profile",(function(t){var e={name:t.profileName,about:t.profileJob};z((function(){return M.editUserInfo(e).then((function(t){H.setUserInfo(t)}))}),G)})),K=document.querySelector(".profile__edit-button");G.setEventListeners(),K.addEventListener("click",(function(){var t=H.getUserInfo(),e={profileName:t.name,profileJob:t.about};G.setInputValues(e),G.open()}));var Q=new A(".popup_type_avatar",(function(t){var e={avatar:t.profileAvatar};z((function(){return M.editUserAvatar(e).then((function(t){H.setUserInfo(t)}))}),Q)}));Q.setEventListeners(),document.querySelector(".profile__avatar").addEventListener("click",(function(){Q.open()}));var W=new A(".popup_type_place",(function(t){var e={name:t.placeName,link:t.placeImage,likes:[]};z((function(){return M.createNewCard(e).then((function(t){F.addItem($(t))}))}),W)})),X=document.querySelector(".profile__add-button");W.setEventListeners(),X.addEventListener("click",(function(){W.open()}));var Y,Z={};Y={formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disable",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(t){var e=new s(t,Y),n=t.getAttribute("name");Z[n]=e,e.enableValidation()})),M.getAppInfo().then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H.setUserInfo(o),i.reverse(),F.renderItems(i)})).catch((function(t){console.log(t)}))})();