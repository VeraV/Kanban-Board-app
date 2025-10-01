import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, toggleCreateBar }) {
  return (
    <nav
      id="side-bar"
      style={{
        width: isOpen ? "250px" : "0px",
      }}
    >
      <ol>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kanban"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <button id="create-btn" onClick={toggleCreateBar}>
            ⨁ Create New
          </button>
        </li>
      </ol>
    </nav>
  );
}

export default Sidebar;
