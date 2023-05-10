import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() { 
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() { 
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}/>
      <Footer/>

      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <input
            className="popup__input popup__input_type_name"
            type="text"
            id="name-input"
            name="name"
            placeholder="Имя"
            minlength="2"
            maxlength="40"
            required/>
          <span className="popup__error name-input-error"></span>
          <input
            className="popup__input popup__input_type_about"
            type="text"
            id="about-input"
            name="about"
            placeholder="О себе"
            minlength="2"
            maxlength="200"
            required/>
          <span className="popup__error about-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="card-add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <input
            className="popup__input popup__input_type_title"
            type="text"
            id="title-input"
            name="name"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required/>
          <span className="popup__error title-input-error"></span>
          <input
            className="popup__input popup__input_type_link"
            type="url"
            id="link-input"
            name="link"
            placeholder="Ссылка на картинку"
            required/>
          <span className="popup__error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="card-delete"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}>
      </PopupWithForm>

      <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input
            className="popup__input popup__input_type_link"
            type="url"
            id="avatar-input"
            name="avatar"
            placeholder="Ссылка на картинку"
            required/>
          <span className="popup__error avatar-input-error"></span>
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups}/>
      
      <template className="card-template">
        <li className="card">
          <button
            className="card__delete-button"
            type="button"
            aria-label="кнопка-удалить">
          </button>
          <img className="card__image" src="#" alt="#"/>
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__like-wrapper">
              <button
                className="card__like-button"
                type="button"
                aria-label="кнопка-нравится">
              </button>
              <span className="card__like-counter"></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
