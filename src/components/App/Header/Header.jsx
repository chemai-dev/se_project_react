import "./Header.css";
import logo from "../../../assets/app-logo.svg";
import avatar from "../../../assets/app-avatar.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="App logo" className="header__logo" />
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button type="button" className="header__add-clothes-button">
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Admin</p>
        <img src={avatar} alt="Admin" className="header__user-avater" />
      </div>
    </header>
  );
}

export default Header;
