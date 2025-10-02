import { useState } from "react";

function Card({ task, fromCol, handleUpdateItem, handleRemoveCard }) {
  const { id, title, description, assignee, priority, createdDate, dueDate } =
    task;

  const [isEditing, setIsEditing] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedAssignee, setUpdatedAssignee] = useState(assignee);
  const [updatedDueDate, setUpdatedDueDate] = useState(dueDate);

  const classListHeader = `cardHeader priority${priority}Header`;

  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ taskId: id, fromCol })
    );
  };

  const handleSaveEdit = () => {
    const updatedTask = {
      ...task,
      title: updatedTitle,
      description: updatedDescription,
      assignee: updatedAssignee,
      dueDate: updatedDueDate,
    };
    handleUpdateItem(fromCol, updatedTask);
    setIsEditing(false);
  };

  const toggleExpand = () => setExpanded(!expanded);

  const handleDelete = () => {
    handleRemoveCard(fromCol, id);
  };

  return (
    <div draggable onDragStart={handleDragStart} className="card">
      <section className={classListHeader}>
        <div>
          {!isEditing ? (
            <h4>{title}</h4>
          ) : (
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          )}
          <div className="due-date">
            {!isEditing ? (
              <p>Due: {dueDate}</p>
            ) : (
              <input
                type="date"
                value={updatedDueDate}
                onChange={(e) => setUpdatedDueDate(e.target.value)}
              />
            )}
          </div>
        </div>
        <button type="button" onClick={toggleExpand}>
          {expanded ? "➖" : "➕"}
        </button>
      </section>

      {expanded && (
        <section className="cardBody">
          {!isEditing ? (
            <p className="description">{description}</p>
          ) : (
            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          )}

          <p>
            <strong>Assigned to: </strong>
            {!isEditing ? (
              assignee
            ) : (
              <input
                type="text"
                value={updatedAssignee}
                onChange={(e) => setUpdatedAssignee(e.target.value)}
              />
            )}
          </p>

          <section className="card-bottom">
            <span>Created: {createdDate}</span>
            {!isEditing ? (
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                ✎
              </button>
            ) : (
              <>
                <button className="save-btn" onClick={handleSaveEdit}>
                  ✔
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  ✖
                </button>
              </>
            )}
            <button className="delete-btn" onClick={handleDelete}>
              🗑
            </button>
          </section>
        </section>
      )}
    </div>
  );
}

export default Card;
