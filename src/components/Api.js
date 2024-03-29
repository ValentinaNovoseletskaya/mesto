export default class Api {
    constructor(baseUrl, headers) {
      this._headers = headers,
      this._baseUrl = baseUrl
    }
    
    _request(url, options) {
      return fetch(url, options).then(this.resolveFetch)
    }

    resolveFetch(res) {
      if (res.ok) { 
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    }

    getInitialCards() {
      return this._request(`${this._baseUrl}/cards`, {
        headers: this._headers
      });
    } 
      
    createNewCard(data) {
      return this._request(`${this._baseUrl}/cards`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: this._headers
      });
    }

    getUserInfo() {
      return this._request(`${this._baseUrl}/users/me`, {
        headers: this._headers
      });
    } 

    editUserInfo(data) {
      return this._request(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        body: JSON.stringify(data),  
        headers: this._headers
      });
    }

    editUserAvatar(data) {
      return this._request(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        body: JSON.stringify(data),  
        headers: this._headers
      });
    }

    addCardLike(cardId) {
      return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers
      });
    }
    
    deteleCardLike(cardId) {
      return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers
      });
    }
    removeCard(cardId) {
      return this._request(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers
      });
    }

    getAppInfo() {
      return Promise.all([
        this.getUserInfo(),
        this.getInitialCards()
      ])
    }
}
  
