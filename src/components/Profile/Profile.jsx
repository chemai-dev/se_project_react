import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSelection from "../ClothesSelection/ClothesSelection.jsx";

function Profile({ clothingItems, handleCardClick, handleAddClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSelection
        clothingItems={clothingItems}
        onCardClick={handleCardClick}
        onAddClick={handleAddClick}
      />
    </section>
  );
}

export default Profile;
