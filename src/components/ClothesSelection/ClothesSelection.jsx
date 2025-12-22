import "./ClothesSelection.css";
import ItemCard from "../App/ItemCard/ItemCard";

function ClothesSelection({ clothingItems, onCardClick }) {
  return (
    <section className="clothes-selection">
      <div className="clothes-selection__row">
        <p>Your items</p>
        <button className="clothes-selection__button">+ Add new</button>
      </div>
      <ul className="clothes-selection__cards-list">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSelection;
