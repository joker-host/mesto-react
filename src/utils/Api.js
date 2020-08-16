import headers from './constants.js';

class Api {
    constructor(headers) {
        this.baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-13';
        this._headers = headers;
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        })
        .then(result => {
            if (result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Ошибка: ${result.status}`);
            }
        })
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then(result => {   
            if (result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Ошибка: ${result.status}`);
            }
        })
    }

    setUserUnfo(values) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: values.name,
                about: values.about
            })
        })
        .then(result => {
            if (result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Ошибка: ${result.status}`);
            }
        })
    }

    addCards(values) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: values.title,
                link: values.link
            })
        })
        .then(result => {
            if (result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Ошибка: ${result.status}`);
            }
        })
    }

    likeCards(idCard) {
        return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(result => {
            if (result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Ошибка: ${result.status}`);
            }
        })
    }

    disLikeCards(idCard) {
        return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(result => {
            if (result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Ошибка: ${result.status}`);
            }
        })
    }

    deleteCards(idCard) {
        return fetch(`${this.baseUrl}/cards/${idCard}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(result => {
            if (result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Ошибка: ${result.status}`);
            }
        })
    }

    changeAvatar(values) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              avatar: values.link
            })
          })
        .then(result => {
            if (result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Ошибка: ${result.status}`);
            }
        })
    }
}

const api = new Api(headers);

export { api };