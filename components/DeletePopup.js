import React from 'react';
import PopupWithForm from './PopupWithForm';
import { UserContext } from '../contexts/CurrentUserContext.js';
import { useState, useEffect } from 'react';


function DeletePopup({ isOpen, onClose, card, onDeleteCard }) {

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onDeleteCard(card)
    }

    return (
        <PopupWithForm 
            name="delete-cards" 
            title="Вы уверены?" 
            isOpen={isOpen} 
            onClose={onClose} 
            buttonText={'Да'}
            onSubmit={handleSubmit}>
        </PopupWithForm>
    )
}

export default DeletePopup;