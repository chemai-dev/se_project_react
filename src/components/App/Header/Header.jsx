import "./Header.css";
import logo from "../../../assets/app-logo.svg";
import avatar from "../../../assets/app-avatar.svg";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink className="header__nav-link" to="/">
        <img src={logo} alt="App logo" className="header__logo" />
      </NavLink>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add clothes
      </button>
      <NavLink className="header__nav-link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">Admin</p>
          <img src={avatar} alt="Admin" className="header__user-avater" />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
