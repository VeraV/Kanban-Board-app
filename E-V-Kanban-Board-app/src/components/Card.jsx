import { useState } from "react";

function Card({
  task,
  handleRemoveCard,
  handleExpandCard,
  expanded,
  isSidebarOpen,
  handleUpdateItem,
  fromCol, // still useful if you keep Kanban drag/drop
}) {
  const {
    id,
    title,
    description,
    assignee,
    status,
    priority,
    createdDate,
    dueDate,
  } = task;

  const classListHeader = `cardHeader priority${priority}Header`;

  const [inEditMode, setInEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDueDate, setUpdatedDueDate] = useState(dueDate);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedAssignee, setUpdatedAssignee] = useState(assignee);

  const handleEditCard = () => setInEditMode(true);

  const handleUpdateCard = (event) => {
    event.preventDefault();
    setInEditMode(false);

    const updatedItem = {
      id,
      title: updatedTitle,
      description: updatedDescription,
      assignee: updatedAssignee,
      status,
      priority,
      createdDate,
      dueDate: updatedDueDate,
    };

    handleUpdateItem(updatedItem);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ taskId: id, fromCol })
    );
  };

  return (
    <form>
      <div
        draggable
        onDragStart={handleDragStart}
        className={`card ${expanded ? "expanded" : ""}`}
        style={{
          transition: "transform 0.3s ease",
          transform: isSidebarOpen ? "translateX(250px)" : "translateX(0)",
          background: "white",
          borderRadius: "6px",
          marginBottom: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          cursor: "grab",
        }}
      >
        {/* Header */}
        <section className={classListHeader}>
          <div>
            {!inEditMode ? (
              <h4>{title}</h4>
            ) : (
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            )}
            <div className="due-date">
              <i>
                {!inEditMode ? (
                  <p>Due: {dueDate}</p>
                ) : (
                  <input
                    type="date"
                    name="updatedDueDate"
                    value={updatedDueDate}
                    onChange={(e) => setUpdatedDueDate(e.target.value)}
                  />
                )}
              </i>
            </div>
          </div>
          <button type="button" onClick={() => handleExpandCard(id)}>
            {expanded ? "➖" : "➕"}
          </button>
        </section>

        {/* Body */}
        {expanded && (
          <section className="cardBody">
            {!inEditMode ? (
              <p className="description">{description}</p>
            ) : (
              <textarea
                name="updatedDescription"
                type="text"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
            )}
            <p>
              <i>
                <strong>Assigned to: </strong>
                {!inEditMode ? (
                  `${assignee}`
                ) : (
                  <input
                    type="text"
                    value={updatedAssignee}
                    onChange={(e) => setUpdatedAssignee(e.target.value)}
                  />
                )}
              </i>
            </p>
            <section className="card-bottom">
              <span>Created: {createdDate}</span>
              {!inEditMode ? (
                <button
                  className="edit-btn"
                  type="button"
                  onClick={handleEditCard}
                >
                  ✎
                </button>
              ) : (
                <button
                  className="save-btn"
                  type="button"
                  onClick={handleUpdateCard}
                >
                  ✔
                </button>
              )}
              <button
                className="delete-btn"
                type="button"
                onClick={() => handleRemoveCard(id)}
              >
                ✖
              </button>
            </section>
          </section>
        )}
      </div>
    </form>
  );
}

export default Card;
