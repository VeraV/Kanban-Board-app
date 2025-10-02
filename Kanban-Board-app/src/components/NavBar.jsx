import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
//import navIcon from "../assets/iconbar.png";
//{ toggleSidebar }

function NavBar() {
  return (
    <nav>
      <section className="logo-name">
        <img src={logo} alt="Logo" />
        <h1>Kanban</h1>
      </section>

      {/*<button id="icon-bar" onClick={toggleSidebar}>
        <img src={navIcon} alt="Menu" />
      </button>*/}

      {/*move navigation here*/}
      <section className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home Page
        </NavLink>

        <NavLink
          to="/kanban"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Main Page
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          About
        </NavLink>
      </section>

      <div className="ç">
        <a
          href="https://github.com/emidiop-05/Emidio-Vera-Kanban-Board-app"
          target="_blank"
        >
          GitHub ↗
        </a>
      </div>

      {/*<button id="create-btn" onClick={toggleCreateBar}>
        ⨁ Create New
      </button>*/}
    </nav>
  );
}

export default NavBar;
