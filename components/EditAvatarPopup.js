import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    
    const avatarInputRef = React.useRef();

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateAvatar({
          avatar: avatarInputRef.current.value
        });
        avatarInputRef.current.value = '';
      }

    return (
        <PopupWithForm name="avatar" title="Изменить аватар" isOpen={isOpen} onClose={onClose} buttonText={'Сохранить'} onSubmit={handleSubmit}>
            <>
                <input ref={avatarInputRef} type="url" name="link" id="avatar-input" className="popup__form-input single-input" required autoComplete="off" placeholder="Вставьте ссылку" minLength={2} />
                <span id="avatar-input-error" className="error" />
            </>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;