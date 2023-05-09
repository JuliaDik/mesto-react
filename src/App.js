import React from 'react';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="header__logo"
          src="<%=require('./images/logo.svg')%>"
          alt="Логотип"/>
      </header>
      <main className="content">
        <section className="profile" aria-label="профиль пользователя">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar-image"
              src="#"
              alt="Аватар пользователя"/>
            <div className="profile__avatar-edit"></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="кнопка-редактировать"
              title = "Редактировать">
            </button>
            <p className="profile__about"></p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="кнопка-добавить"
            title = "Добавить карточку">
          </button>
        </section>
        <section className="gallery" aria-label="карточки с фотографиями">
          <ul className="cards-container"></ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2023 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="кнопка-закрыть">
          </button>
          <form className="popup__form" name="profile-form" novalidate>
            <h3 className="popup__title">Редактировать профиль</h3>
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
            <button
              className="popup__submit-button"
              type="submit"
              aria-label="кнопка-сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="кнопка-закрыть">
          </button>
          <form className="popup__form" name="card-form" novalidate>
            <h3 className="popup__title">Новое место</h3>
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
            <button
              className="popup__submit-button"
              type="submit"
              aria-label="кнопка-сохранить">
              Создать
            </button>
          </form>
        </div>
      </div>
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
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="кнопка-закрыть">
          </button>
          <form className="popup__form" name="avatar-form">
            <h3 className="popup__title">Обновить аватар</h3>
            <input
              className="popup__input popup__input_type_link"
              type="url"
              id="avatar-input"
              name="avatar"
              placeholder="Ссылка на картинку"
              required/>
            <span className="popup__error avatar-input-error"></span>
            <button
              className="popup__submit-button"
              type="submit"
              aria-label="кнопка-сохранить">
              Сохранить
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
