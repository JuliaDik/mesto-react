import React from 'react';

function ImagePopup() {
  return (
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
  )
}

export default ImagePopup;