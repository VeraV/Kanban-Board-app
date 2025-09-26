import Sidebar from "../components/Sidebar";
import KanbanList from "../components/List";

function MainPage({ isSidebarOpen, isCreateBarOpen, toggleCreateBar }) {
  return (
    <div className="Main-page">
      <Sidebar isOpen={isSidebarOpen} toggleCreateBar={toggleCreateBar} />
      <KanbanList
        isSidebarOpen={isSidebarOpen}
        isCreateBarOpen={isCreateBarOpen}
      />
    </div>
  );
}

export default MainPage;
