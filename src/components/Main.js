import React from "react";
import api from "../utils/Api";
import Card from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.toggleLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  return (
    <main className="content">
      <section className="profile" aria-label="профиль пользователя">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar-image"
            src={currentUser.avatar}
            alt="Аватар пользователя"
          />
          <div
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="кнопка-редактировать"
            title="Редактировать"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="кнопка-добавить"
          title="Добавить карточку"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="gallery" aria-label="карточки с фотографиями">
        <ul className="cards-container">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
