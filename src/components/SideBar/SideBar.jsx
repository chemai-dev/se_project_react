import "./SideBar.css";
import avatar from "../../assets/app-avatar.svg";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <p className="sidebar__username">Admin</p>
        <img src={avatar} alt="Admin" className="sidebar__user-avatar" />
      </div>
    </aside>
  );
}

export default SideBar;
