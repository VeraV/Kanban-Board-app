import { useState } from "react";
import Sidebar from "../components/Sidebar";
import KanbanBoard from "../components/KanbamBoard";

function MainPage({ isSidebarOpen }) {
  const [isCreateBarOpen, setIsCreateBarOpen] = useState(false);

  const toggleCreateBar = () => {
    setIsCreateBarOpen((prev) => !prev);
  };

  return (
    <div className="Main-page">
      <Sidebar isOpen={isSidebarOpen} toggleCreateBar={toggleCreateBar} />

      <KanbanBoard isCreateBarOpen={isCreateBarOpen} />
    </div>
  );
}

export default MainPage;
