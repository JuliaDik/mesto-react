import React from 'react';

function Main(props) {
  return (
    <main className="content">
      <section className="profile" aria-label="профиль пользователя">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar-image"
            src="#"
            alt="Аватар пользователя"/>
          <div
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="кнопка-редактировать"
            title = "Редактировать"
            onClick={props.onEditProfile}>
          </button>
          <p className="profile__about"></p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="кнопка-добавить"
          title = "Добавить карточку"
          onClick={props.onAddPlace}>
        </button>
      </section>
      <section className="gallery" aria-label="карточки с фотографиями">
        <ul className="cards-container"></ul>
      </section>
    </main>
  )
}

export default Main;