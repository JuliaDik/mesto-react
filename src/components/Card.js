import React from 'react';

function Card(props) {
  return (
    <li className="card">
      <button
        className="card__delete-button"
        type="button"
        aria-label="кнопка-удалить">
      </button>
      <img className="card__image" src={props.link} alt={props.name}/>
      <div className="card__info">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-wrapper">
          <button
            className="card__like-button"
            type="button"
            aria-label="кнопка-нравится">
          </button>
          <span className="card__like-counter">{props.likes}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;