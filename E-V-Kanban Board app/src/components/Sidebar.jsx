function Sidebar({ sideBar }) {
  return (
    <nav id="side-bar">
      <ol>
        <li>
          <button>Home Page</button>
        </li>
        <li>
          <button>Main Page</button>
        </li>
      </ol>
      {sideBar}
    </nav>
  );
}

export default Sidebar;
