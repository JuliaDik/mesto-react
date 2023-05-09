import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="кнопка-закрыть">
        </button>
        <form className="popup__form" name={props.name} novalidate>
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button
            className="popup__submit-button"
            type="submit"
            aria-label="кнопка-сохранить">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
