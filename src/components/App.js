import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api.js';
import { UserContext } from '../contexts/CurrentUserContext.js';

function App() {

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      name: card.name,
      link: card.link
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
    avatar: '',
    _id: '',
    cohort: ''
  });
  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res);
      })
      .catch(() => {
        console.error('error');
      })
  }, [])

  return (
    <div className="body">
      <div className="page">
      <UserContext.Provider value={currentUser}>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardImageClick={handleCardClick}/>
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'} children={
          <>
            <input type="text" name="name" className="popup__form-input" defaultValue="Жак-Ив Кусто" required autoComplete="off" id="name-input" placeholder="Имя" minLength={2} maxLength={40} pattern="[А-ЯЁа-яёA-Za-z-–—\s]*" />
            <span id="name-input-error" className="error" />
            <input type="text" name="about" className="popup__form-input" defaultValue="Исследователь океана" required autoComplete="off" id="job-input" placeholder="Род деятельности" minLength={2} maxLength={200} />
            <span id="job-input-error" className="error" />
          </>
        } />

        <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={'Создать'} children={
          <>
            <input type="text" name="title" className="popup__form-input"  required autoComplete="off" id="title-input" placeholder="Название" minLength={1} maxLength={30} />
            <span id="title-input-error" className="error" />
            <input type="url" name="link" className="popup__form-input"  required autoComplete="off" id="link-input" placeholder="Ссылка на картинку" />
            <span id="link-input-error" className="error" />
          </>
        } />

        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'} children={
          <>
            <input type="url" name="link" id="avatar-input" className="popup__form-input single-input" required autoComplete="off" placeholder="Вставьте ссылку" minLength={2} />
            <span id="avatar-input-error" className="error" />
          </>
        } />

        <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups}/>
      </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
