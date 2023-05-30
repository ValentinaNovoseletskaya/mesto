// Создать отдельный класс Api
// - Он должен принимать в качестве параметров в конструктор хост запросов (то есть корневая часть запросов которая будет использоваться в каждом методе), токен и айдишник группы
// - в этом классе должно быть по одному методу на каждое действие - лайк карточки, создание карточки, удаление и так далее. Каждый метод должен ВОЗВРАЩАТЬ промис, например в виде исполнения функции fetch
// - также создайте дополнительный метод, который будет возвращать Promise.all с отработкой двух методов - получение всех карточек и получение данных пользователя. назовите его например getAppInfo
// - внутри класса Api не должно быть catch обработок - они все должны быть расположены снаружи класса, то есть в тех местах где вы вызываете методы этого класса
// В каждом методе класса Api лучше не прописывать вот это все: res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
// а лучше вынести это в отдельный метод класса и применять эту конструкцию по ссылке, чтобы не дублировать код - ревьюеры могут поругать за такое. да и править код будет так проще - не надо будет искать такие конструкции, а достаточно будет поправить в одном месте

export default class Api {
    constructor(options) {
      // тело конструктора
    }
  
    getInitialCards() {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards', {
        headers: {
          authorization: 'e80de601-eadc-4261-9de7-7dde09fbf72f'
        }
      })
      .then((res) => {
        if (res.ok) { 
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
    } 
      
    createNewCard(data) {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          authorization: 'e80de601-eadc-4261-9de7-7dde09fbf72f',
          "Content-Type": "application/json"
        }
      })
      .then((res) => {
        if (res.ok) { 
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
    }

    getUserInfo() {
      return fetch('https://nomoreparties.co/v1/cohort-66/users/me', {
        headers: {
          authorization: 'e80de601-eadc-4261-9de7-7dde09fbf72f'
        }
      })
      .then((res) => {
        if (res.ok) { 
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
    } 

    editUserInfo(data) {
      const res = fetch('https://nomoreparties.co/v1/cohort-66/users/me', {
        method: "PATCH",
        body: JSON.stringify(data),  
        headers: {
          authorization: 'e80de601-eadc-4261-9de7-7dde09fbf72f',
          "Content-Type": "application/json"
        }
      });
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    }
}
  
