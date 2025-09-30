import Sidebar from "../components/Sidebar";
import KanbanList from "../components/List";
import KanbanBoard from "../components/KanbamBoard";

function MainPage({ isSidebarOpen, isCreateBarOpen, toggleCreateBar }) {
  return (
    <div className="Main-page">
      <Sidebar isOpen={isSidebarOpen} toggleCreateBar={toggleCreateBar} />

      <KanbanBoard />
    </div>
  );
}

export default MainPage;
