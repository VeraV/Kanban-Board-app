import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <nav
      id="side-bar"
      style={{
        width: isOpen ? "250px" : "0px",
      }}
    >
      <ol>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/kanban">Main Page</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ol>
    </nav>
  );
}

export default Sidebar;
