export default class UserInfo {
    constructor(profileNameSelector, profileJobSelector) {

        this._profileNameElement = document.querySelector(profileNameSelector);
        this._profileJobElement = document.querySelector(profileJobSelector);
        this._userName = this._profileNameElement.textContent;
        this._userDescription = this._profileJobElement.textContent;
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
        
        this._profileNameElement.textContent = this._userName;
        this._profileJobElement.textContent = this._userDescription;
        
    }
}