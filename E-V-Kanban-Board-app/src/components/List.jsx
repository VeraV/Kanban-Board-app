import kanbanData from "../assets/kanban.json";
import { useState } from "react";
import ListItemCard from "./ListItemCard";

function KanbanList({ isSidebarOpen }) {
  const [items, setItems] = useState(kanbanData);
  const [expandedCardId, setExpandedCardId] = useState(null);

  function handleRemoveCard(itemIdToRemove) {
    setItems(items.filter((item) => item.id !== itemIdToRemove));
  }

  function handleExpandCard(id) {
    setExpandedCardId((prev) => (prev === id ? null : id));
  }

  return (
    <div id="kanban-list">
      <ul>
        {items.map((item) => (
          <ListItemCard
            key={item.id}
            item={item}
            handleRemoveCard={handleRemoveCard}
            handleExpandCard={handleExpandCard}
            expanded={expandedCardId === item.id}
            isSidebarOpen={isSidebarOpen}
          />
        ))}
      </ul>
    </div>
  );
}

export default KanbanList;
