import React from 'react';
import PopupWithForm from './PopupWithForm';
import { UserContext } from '../contexts/CurrentUserContext.js';
import { useState, useEffect } from 'react';


function EditAvatarPopup({ isOpen, onClose, onUpdateUser }) {

    return (
        <PopupWithForm name="avatar" title="Изменить аватар" isOpen={isOpen} onClose={onClose} buttonText={'Сохранить'}>
            <>
                <input type="url" name="link" id="avatar-input" className="popup__form-input single-input" required autoComplete="off" placeholder="Вставьте ссылку" minLength={2} />
                <span id="avatar-input-error" className="error" />
            </>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;