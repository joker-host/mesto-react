import React from 'react';
import { useState } from 'react';
import { api } from '../utils/api.js';
import Card from './Card';
import { UserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardImageClick }) {

  const userInfo = React.useContext(UserContext);

  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch(() => {
        console.error('error');
      })
  }, [])

  function handleCardLike(props) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = props.likes.some(i => i._id === userInfo._id);
    

    // Отправляем запрос в API и получаем обновлённые данные карточки
    if(!isLiked) {
      api.likeCards(props._id)
        .then((newCard) => {
          console.log(newCard)
          const newCards = cards.map((item) => item._id === props._id ? newCard : item);
          setCards(newCards);
        })
    } else {
      api.disLikeCards(props._id)
        .then((newCard) => {
          console.log(newCard)
          const newCards = cards.map((item) => item._id === props._id ? newCard : item);
          setCards(newCards);
        })
    }
  }


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
          <div className="profile__avatar-overlay"></div>
          <img alt="здесь должна быть аватарка :)" className="profile__avatar" src={userInfo.avatar} />
        </div>
        <div className="profile__info">
          <h2 className="profile__author">{userInfo.name}</h2>
          <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          <p className="profile__description">{userInfo.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>
      <section className="elements">
        {
          cards.map(({ _id, ...props }) => <Card key={_id} _id={_id} onCardClick={onCardImageClick} onCardLike={handleCardLike} {...props} />)
        }
      </section>
    </main>
  );
}

export default Main;