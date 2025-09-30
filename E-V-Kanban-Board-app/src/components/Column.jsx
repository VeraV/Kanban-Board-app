import Card from "./Card";

function Column({ column, onDrop }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const { taskId, fromCol } = JSON.parse(
      e.dataTransfer.getData("application/json")
    );
    onDrop(taskId, fromCol, column.id);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{
        background: "#f4f4f4",
        borderRadius: "8px",
        padding: "12px",
        minHeight: "200px",
      }}
    >
      <h2>{column.title}</h2>
      {column.tasks.map((task) => (
        <Card key={task.id} task={task} fromCol={column.id} />
      ))}
    </div>
  );
}

export default Column;
