export default class UserInfo {
    constructor(profileNameSelector, profileJobSelector, profileAvatarSelector) {
        this._profileNameElement = document.querySelector(profileNameSelector);
        this._profileJobElement = document.querySelector(profileJobSelector);
        this._profileAvatarElement = document.querySelector(profileAvatarSelector);      
    }

    getUserInfo() {
        const userData = {
            id: this._id,
            name: this._userName,
            about: this._userAbout,
            avatar: this._userAvatar
        }
        return userData;
    }

    setUserInfo(userData) {
        this._id = userData._id ?? this._id;
        this._userName = userData.name ?? this._userName;
        this._userAbout = userData.about ?? this._userAbout;
        this._userAvatar = userData.avatar ?? this._userAvatar;
        this._profileNameElement.textContent = this._userName;
        this._profileJobElement.textContent = this._userAbout;        
        this._profileAvatarElement.src = this._userAvatar;
    }
}