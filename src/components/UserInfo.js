export default class UserInfo {
    constructor(profileNameSelector, profileJobSelector, profileAvatarSelector) {
        this._profileNameElement = document.querySelector(profileNameSelector);
        this._profileJobElement = document.querySelector(profileJobSelector);
        this._profileAvatarElement = document.querySelector(profileAvatarSelector);      
    }

    getUserInfo() {
        const userData = {
            name: this._userName,
            description: this._userDescription,
            avatar: this._userAvatar
        }
        return userData;
    }

    setUserInfo(userData) {
        this._userName = userData.name ?? this._userName;
        this._userDescription = userData.about ?? this._userDescription;
        this._userAvatar = userData.avatar ?? this._userAvatar;
        this._profileNameElement.textContent = this._userName;
        this._profileJobElement.textContent = this._userDescription;        
        this._profileAvatarElement.src = this._userAvatar;
    }
}