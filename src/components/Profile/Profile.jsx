import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSelection from "../ClothesSelection/ClothesSelection.jsx";

function Profile({ clothingItems, handleCardClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSelection
        clothingItems={clothingItems}
        onCardClick={handleCardClick}
      />
    </section>
  );
}

export default Profile;
