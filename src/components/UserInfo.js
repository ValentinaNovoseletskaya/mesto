export default class UserInfo {
    constructor(userName = 'Жак-Ив Кусто', userDescription = 'Исследователь океана') {
        this._userName = userName;
        this._userDescription = userDescription;
    }

    getUserInfo() {
        const userData = {
            name: this._userName,
            description: this._userDescription
        }
        return userData;
    }

    setUserInfo(userName, userDescription) {
        this._userName = userName;
        this._userDescription = userDescription;
        
        document.querySelector(".profile__name").textContent = this._userName;
        document.querySelector(".profile__job").textContent = this._userDescription;
        
    }
}