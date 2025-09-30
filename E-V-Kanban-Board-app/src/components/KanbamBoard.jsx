import { useState, useEffect } from "react";
import Column from "./Column";
import kanbanData from "../assets/kanban.json";
import CardCreation from "./CardCreator";

function KanbanBoard({ isCreateBarOpen }) {
  const [columns, setColumns] = useState({
    todo: { id: "todo", title: "To Do", tasks: [] },
    inprogress: { id: "inprogress", title: "In Progress", tasks: [] },
    done: { id: "done", title: "Done", tasks: [] },
  });

  useEffect(() => {
    const todoTasks = kanbanData.filter((t) => t.status === "To Do");
    const inProgressTasks = kanbanData.filter(
      (t) => t.status === "In Progress"
    );
    const doneTasks = kanbanData.filter((t) => t.status === "Done");

    setColumns({
      todo: { ...columns.todo, tasks: todoTasks },
      inprogress: { ...columns.inprogress, tasks: inProgressTasks },
      done: { ...columns.done, tasks: doneTasks },
    });
  }, []);

  const onDrop = (taskId, fromCol, toCol) => {
    if (fromCol === toCol) return;

    const task = columns[fromCol].tasks.find((t) => t.id === taskId);
    const newFromTasks = columns[fromCol].tasks.filter((t) => t.id !== taskId);
    const newToTasks = [
      ...columns[toCol].tasks,
      { ...task, status: columns[toCol].title },
    ];

    setColumns({
      ...columns,
      [fromCol]: { ...columns[fromCol], tasks: newFromTasks },
      [toCol]: { ...columns[toCol], tasks: newToTasks },
    });
  };

  const handleUpdateItem = (colId, updatedTask) => {
    setColumns((prev) => ({
      ...prev,
      [colId]: {
        ...prev[colId],
        tasks: prev[colId].tasks.map((task) =>
          task.id.toString() === updatedTask.id.toString() ? updatedTask : task
        ),
      },
    }));
  };

  const handleRemoveCard = (colId, taskId) => {
    setColumns((prev) => ({
      ...prev,
      [colId]: {
        ...prev[colId],
        tasks: prev[colId].tasks.filter(
          (task) => task.id.toString() !== taskId.toString()
        ),
      },
    }));
  };

  const handleAddCard = (status, newCard) => {
    const key = status.toLowerCase().replace(" ", "");
    setColumns((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        tasks: [...prev[key].tasks, newCard],
      },
    }));
  };

  return (
    <>
      {isCreateBarOpen && <CardCreation handleAddCard={handleAddCard} />}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          padding: "16px",
        }}
      >
        {Object.values(columns).map((col) => (
          <Column
            key={col.id}
            column={col}
            onDrop={onDrop}
            onUpdateItem={handleUpdateItem}
            onRemoveCard={handleRemoveCard}
          />
        ))}
      </div>
    </>
  );
}

export default KanbanBoard;
