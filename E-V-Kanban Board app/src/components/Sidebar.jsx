function Sidebar({ sideBar }) {
  return (
    <nav id="side-bar">
      <ol>
        <li>Home Page</li>
        <li>Main Page</li>
      </ol>
      {sideBar}
    </nav>
  );
}

export default Sidebar;
