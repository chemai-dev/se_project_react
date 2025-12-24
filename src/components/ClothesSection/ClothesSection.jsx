import "./ClothesSection.css";
import ItemCard from "../App/ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick, onAddClick }) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        <p>Your items</p>
        <button onClick={onAddClick} className="clothes-section__button">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__cards-list">
        {clothingItems.reverse().map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
