import ModalWithForm from "../App/ModalWithForm/ModalWithForm";

function AddItemModal() {
  const AddItemModal = ({ isOpen, handleSubmit, onCloseModal }) => {
    return (
      <ModalWithForm
        title="New garment"
        name="new-card"
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="modal__label">
          Name{""}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="name"
            required
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{""}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
            required
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <p className="modal__legend">Select the weather type:</p>
          <label
            htmlFor="hot"
            className="modal__label modal__label_type_radio "
          >
            <input
              id="hot"
              type="radio"
              name="weather"
              className="modal__radio-input"
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio  "
          >
            <input
              id="warm"
              type="radio"
              name="weather"
              className="modal__radio-input"
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio "
          >
            <input
              id="cold"
              type="radio"
              name="weather"
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    );
  };
}

export default AddItemModal;
