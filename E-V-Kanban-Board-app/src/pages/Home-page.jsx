import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";

function HomePage({ isSidebarOpen }) {
  return (
    <div className="Home-page">
      <Sidebar isOpen={isSidebarOpen} />
      <Logo isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default HomePage;
