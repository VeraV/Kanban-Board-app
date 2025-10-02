import { useState } from "react";
import KanbanBoard from "../components/KanbanBoard";

function MainPage() {
  const [isCreateBarOpen, setIsCreateBarOpen] = useState(false);

  const toggleCreateBar = () => {
    setIsCreateBarOpen((prev) => !prev);
  };

  return (
    <div className="Main-page">
      <KanbanBoard isCreateBarOpen={isCreateBarOpen} />
    </div>
  );
}

export default MainPage;
