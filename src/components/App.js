import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>

      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        buttonText="Сохранить">
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
        buttonText="Создать">
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
        buttonText="Да">
      </PopupWithForm>

      <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        buttonText="Сохранить">
          <input
            className="popup__input popup__input_type_link"
            type="url"
            id="avatar-input"
            name="avatar"
            placeholder="Ссылка на картинку"
            required/>
          <span className="popup__error avatar-input-error"></span>
      </PopupWithForm>
      <div className="popup popup_type_image">
        <figure className="popup__image-container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="кнопка-закрыть">
          </button>
          <img className="popup__image" src="#" alt="#"/>
          <figcaption className="popup__caption"></figcaption>
        </figure>
        </div>
        <div className="popup popup_type_delete">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="кнопка-закрыть">
          </button>
          <form className="popup__form" name="delete-form">
            <h3 className="popup__title popup__title_type_delete">Вы уверены?</h3>
            <button
              className="popup__submit-button"
              type="submit"
              aria-label="кнопка-сохранить">
              Да
            </button>
          </form>
        </div>
      </div>
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
