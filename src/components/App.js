import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
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

  function handleUpdateUser(values) {
    api.setUserUnfo(values)
      .then(res => {
        console.log(res);
        setCurrentUser(res);
        closeAllPopups();
      })
  }

  return (
    <div className="body">
      <div className="page">
        <UserContext.Provider value={currentUser}>
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardImageClick={handleCardClick} />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

          <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={'Создать'}>
            <>
              <input type="text" name="title" className="popup__form-input" required autoComplete="off" id="title-input" placeholder="Название" minLength={1} maxLength={30} />
              <span id="title-input-error" className="error" />
              <input type="url" name="link" className="popup__form-input" required autoComplete="off" id="link-input" placeholder="Ссылка на картинку" />
              <span id="link-input-error" className="error" />
            </>
          </PopupWithForm>

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

          <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
