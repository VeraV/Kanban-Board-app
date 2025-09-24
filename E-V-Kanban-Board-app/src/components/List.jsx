import kanbanData from "../assets/kanban.json";
import { useState } from "react";
import ListItemCard from "./ListItemCard";

function KanbanList() {
  const [items, setItems] = useState(kanbanData);

  function handleRemoveCard(itemIdToRemove) {
    setItems(items.filter((item) => item.id !== itemIdToRemove));
  }

  return (
    <div id="kanban-list">
      <ul>
        {items.map((item) => (
          <ListItemCard
            key={item.id}
            item={item}
            handleRemoveCard={handleRemoveCard}
          />
        ))}
      </ul>
    </div>
  );
}

export default KanbanList;
