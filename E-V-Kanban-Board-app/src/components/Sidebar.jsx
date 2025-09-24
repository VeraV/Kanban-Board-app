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
          <button>Home Page</button>
        </li>
        <li>
          <button>Main Page</button>
        </li>
      </ol>
    </nav>
  );
}

export default Sidebar;
