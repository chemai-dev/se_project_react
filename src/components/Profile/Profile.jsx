import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";

function Profile({ clothingItems, handleCardClick, handleAddClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={handleCardClick}
        onAddClick={handleAddClick}
      />
    </section>
  );
}

export default Profile;
