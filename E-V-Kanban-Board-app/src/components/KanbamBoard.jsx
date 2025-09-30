import { useState } from "react";
import Column from "./Column";

const initialData = {
  todo: {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "1", title: "Setup project" },
      { id: "2", title: "Install dependencies" },
    ],
  },
  inprogress: {
    id: "inprogress",
    title: "In Progress",
    tasks: [{ id: "3", title: "Build Kanban board" }],
  },
  done: {
    id: "done",
    title: "Done",
    tasks: [{ id: "4", title: "Understand requirements" }],
  },
};

function KanbanBoard() {
  const [columns, setColumns] = useState(initialData);

  const onDrop = (taskId, fromCol, toCol) => {
    if (fromCol === toCol) return;

    const task = columns[fromCol].tasks.find((t) => t.id === taskId);
    const newFromTasks = columns[fromCol].tasks.filter((t) => t.id !== taskId);
    const newToTasks = [...columns[toCol].tasks, task];

    setColumns({
      ...columns,
      [fromCol]: { ...columns[fromCol], tasks: newFromTasks },
      [toCol]: { ...columns[toCol], tasks: newToTasks },
    });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        padding: "16px",
      }}
    >
      {Object.values(columns).map((col) => (
        <Column key={col.id} column={col} onDrop={onDrop} />
      ))}
    </div>
  );
}

export default KanbanBoard;
