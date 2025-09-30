import Card from "./Card";

function Column({ column, onDrop, onUpdateItem, onRemoveCard }) {
  const handleDropInternal = (e) => {
    e.preventDefault();
    const { taskId, fromCol } = JSON.parse(
      e.dataTransfer.getData("application/json")
    );
    onDrop(taskId, fromCol, column.id);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDropInternal}
      style={{
        background: "#202020ff",
        borderRadius: "8px",
        padding: "12px",
        minHeight: "500px",
        width: "300px",
      }}
      className="column"
    >
      <h2 style={{ color: "#fff" }}>{column.title}</h2>

      {column.tasks.map((task) => (
        <Card
          key={task.id}
          task={task}
          fromCol={column.id}
          handleRemoveCard={onRemoveCard}
          handleUpdateItem={onUpdateItem}
        />
      ))}
    </div>
  );
}

export default Column;
