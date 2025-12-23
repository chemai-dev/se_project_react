import "../ModalWithForm/ModalWithForm.css";
import "./ItemModal.css";

function ItemModal({ isOpen, card, handleCloseClick, deleteItemHandler }) {
  const handleDeleteClick = () => {
    const itemId = card.id || card._id;
    deleteItemHandler(itemId);
  };

  return (
    <div className={`modal${isOpen ? " modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-button modal__close-button_type_light"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-info">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            onClick={handleDeleteClick}
            type="button"
            className="modal__footer-button"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
