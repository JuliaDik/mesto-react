import React from 'react';

function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar-edit').classList.add('popup_opened');
  }
  
  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile-edit').classList.add('popup_opened');
  }
  
  function handleAddPlaceClick() { 
    document.querySelector('.popup_type_card-add').classList.add('popup_opened');
  }

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
            onClick={handleEditAvatarClick}>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="кнопка-редактировать"
            title = "Редактировать"
            onClick={handleEditProfileClick}>
          </button>
          <p className="profile__about"></p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="кнопка-добавить"
          title = "Добавить карточку"
          onClick={handleAddPlaceClick}>
        </button>
      </section>
      <section className="gallery" aria-label="карточки с фотографиями">
        <ul className="cards-container"></ul>
      </section>
    </main>
  )
}

export default Main;