import kanbanData from "../assets/kanban.json";
import { useState } from "react";

function KanbanList() {
  const [items, setItems] = useState(kanbanData);

  return (
    <div id="kanban-list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Assigned to: {item.assignee}</p>
            Status:{" "}
            {item.status === "Done"
              ? "✔️"
              : item.status === "In Progress"
              ? "⏳"
              : "❌"}
            <p>Priority: {item.priority}</p>
            <p>Created: {item.createdDate}</p>
            <p>Due: {item.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbanList;
