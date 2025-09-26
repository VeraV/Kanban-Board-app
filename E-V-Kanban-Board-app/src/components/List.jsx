import kanbanData from "../assets/kanban.json";
import { useState } from "react";
import ListItemCard from "./ListItemCard";
import CardCreation from "./CardCreator";

function KanbanList({ isSidebarOpen, isCreateBarOpen }) {
  const [items, setItems] = useState(kanbanData);
  const [expandedCardId, setExpandedCardId] = useState(null);

  function handleRemoveCard(itemIdToRemove) {
    setItems(items.filter((item) => item.id !== itemIdToRemove));
  }

  function handleUpdateItem(updatedItem) {
    setItems(
      items.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleExpandCard(id) {
    setExpandedCardId((prev) => (prev === id ? null : id));
  }

  function handleAddCard(newCard) {
    setItems([...items, newCard]);
  }

  return (
    <div id="kanban-list">
      {isCreateBarOpen && (
        <div className="create-bar">
          <CardCreation handleAddCard={handleAddCard} />
        </div>
      )}

      <ul>
        {items.map((item) => (
          <ListItemCard
            key={item.id}
            item={item}
            handleRemoveCard={handleRemoveCard}
            handleExpandCard={handleExpandCard}
            expanded={expandedCardId === item.id}
            isSidebarOpen={isSidebarOpen}
            handleUpdateItem={handleUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default KanbanList;
