import {headers, baseUrl} from './constants.js';

class Api {
    
    getInitialCards() {
        return fetch(`${baseUrl}/cards`, {
            method: 'GET',
            headers: headers
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
        return fetch(`${baseUrl}/users/me`, {
            method: 'GET',
            headers: headers
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
        return fetch(`${baseUrl}/users/me`, {
            method: 'PATCH',
            headers: headers,
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
        return fetch(`${baseUrl}/cards`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                name: values.name,
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
        return fetch(`${baseUrl}/cards/likes/${idCard}`, {
            method: 'PUT',
            headers: headers
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
        return fetch(`${baseUrl}/cards/likes/${idCard}`, {
            method: 'DELETE',
            headers: headers
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
        return fetch(`${baseUrl}/cards/${idCard}`, {
            method: 'DELETE',
            headers: headers
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
        return fetch(`${baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({
              avatar: values.avatarUrl
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

const api = new Api();

export { api };