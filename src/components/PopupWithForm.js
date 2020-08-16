import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, children}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form action="#" method="POST" name="form" className={`popup__form popup__form_${name}`} noValidate>
                    {children}
                </form>
                <button type="button" className={`popup__close-icon popup__close-icon_${name}`} onClick={onClose} />
            </div>
        </div>
    );
}

export default PopupWithForm;