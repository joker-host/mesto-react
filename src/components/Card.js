import React from 'react';
import deletee from '../images/delete.svg';

function Card({ name, link, likes, onCardClick }) {

    // console.log({ name, link, likes, onCardClick })
    function handleClick() {
        onCardClick({ name, link });
        console.log({ name, link })
    }

    return (
        <div className="element">
            <img src={deletee} alt="кнопка delete :)" className="element__delete" />
            <img alt="Упс, кажется вы вставили не рабочую ссылку" className="element__photo" src={link} onClick={handleClick} />
            <div className="element__capture-container">
                <p className="element__capture">{name}</p>
                <div className="element__like-container">
                    <button type="button" className="element__like" />
                    <p className="element__like-counter">{likes.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;