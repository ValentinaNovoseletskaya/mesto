export default class Api {
    constructor(options) {
      this._token = options.token,
      this._url = options.host + options.cohortId
    }
    
    resolveFetch(res){
      if (res.ok) { 
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    }

    getInitialCards() {
      return fetch(`${this._url}/cards`, {
        headers: {
          authorization: this._token
        }
      })
      .then(this.resolveFetch);
    } 
      
    createNewCard(data) {
      return fetch(`${this._url}/cards`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          authorization: this._token,
          "Content-Type": "application/json"
        }
      })
      .then(this.resolveFetch);
    }

    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        headers: {
          authorization: this._token
        }
      })
      .then(this.resolveFetch);
    } 

    editUserInfo(data) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        body: JSON.stringify(data),  
        headers: {
          authorization: this._token,
          "Content-Type": "application/json"
        }
      })
      .then(this.resolveFetch);
    }

    editUserAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        body: JSON.stringify(data),  
        headers: {
          authorization: this._token,
          "Content-Type": "application/json"
        }
      })
      .then(this.resolveFetch);
    }

    addCardLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json"
        }
      })
      .then(this.resolveFetch);
    }
    
    deteleCardLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json"
        }
      })
      .then(this.resolveFetch);
    }
    removeCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json"
        }
      })
      .then(this.resolveFetch);
    }

    getAppInfo() {
      return Promise.all([
        this.getUserInfo(),
        this.getInitialCards()
      ])
    }
}
  
