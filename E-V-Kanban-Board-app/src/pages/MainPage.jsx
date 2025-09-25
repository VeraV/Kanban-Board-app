import Sidebar from "../components/Sidebar";
import KanbanList from "../components/List";

function MainPage({ isSidebarOpen }) {
  return (
    <div className="Main-page">
      <Sidebar isOpen={isSidebarOpen} />
      <KanbanList isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default MainPage;
