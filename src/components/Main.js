import React from 'react';
import { useState } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardImage}) {

  const [userName, setuserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then(res => {
      setuserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
  }, [cards])

  React.useEffect(() => {
    api.getInitialCards()
    .then(data => {
      setCards(data);
    })
  }, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
          <div className="profile__avatar-overlay"></div>
          <img alt="здесь должна быть аватарка :)" className="profile__avatar" src={userAvatar}/>
        </div>
        <div className="profile__info">
          <h2 className="profile__author">{userName}</h2>
          <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>
      <section className="elements">
        {
          cards.map(({_id, ...props}) => <Card key={_id} onCardClick={onCardImage} {...props}/>)
        }
      </section>
    </main>
  );
}

export default Main;