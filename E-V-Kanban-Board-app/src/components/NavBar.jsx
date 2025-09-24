import logo from "../assets/logo.png";
import navIcon from "../assets/iconbar.png";

function NavBar({ toggleSidebar }) {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>Kanban</h1>
      <button id="icon-bar" onClick={toggleSidebar}>
        <img src={navIcon} alt="Menu" />
      </button>
    </header>
  );
}

export default NavBar;
