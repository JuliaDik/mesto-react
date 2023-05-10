import React from 'react';
import api from '../utils/Api';
import Card from './Card.js';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cards]) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  })

  return (
    <main className="content">
      <section className="profile" aria-label="профиль пользователя">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar-image"
            src={userAvatar}
            alt="Аватар пользователя"/>
          <div
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="кнопка-редактировать"
            title = "Редактировать"
            onClick={props.onEditProfile}>
          </button>
          <p className="profile__about">{userDescription}</p>
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
        <ul className="cards-container">
          {cards.map((card) => (
            <Card name={card.name} link={card.link} likes={card.likes.length}/>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;