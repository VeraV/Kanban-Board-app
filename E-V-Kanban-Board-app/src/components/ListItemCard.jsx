import { useState } from "react";

function ListItemCard({
  item,
  handleRemoveCard,
  handleExpandCard,
  expanded,
  isSidebarOpen,
  handleUpdateItem,
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
  } = item;

  const classListHeader = `cardHeader priority${priority}Header`;

  const [inEditMode, setInEditMode] = useState(false);

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDueDate, setUpdatedDueDate] = useState(dueDate);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedAssignee, setUpdatedAssignee] = useState(assignee);

  function handleEditCard() {
    setInEditMode(true);
  }

  function handleUpdateCard(event) {
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
  }

  //will use these emoji-s for the columns (also need a hird one for "in progress" status)
  //<span>{status === "Done" ? "✔️" : "❌"}</span>

  return (
    <form>
      <div
        className={`card ${expanded ? "expanded" : ""}`}
        style={{
          transition: "transform 0.3s ease",
          transform: isSidebarOpen ? "translateX(250px)" : "translateX(0)",
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
                onChange={(e) => {
                  setUpdatedTitle(e.target.value);
                }}
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
                    onChange={(e) => {
                      setUpdatedDueDate(e.target.value);
                    }}
                  />
                )}
              </i>
            </div>
          </div>
          <button type="button" onClick={() => handleExpandCard(id)}>
            {expanded ? "➖" : "➕"}
          </button>
        </section>

        {/* Body (only visible if expanded) */}
        {expanded && (
          <section className="cardBody">
            {!inEditMode ? (
              <p className="description">{description}</p>
            ) : (
              <textarea
                name="updatedDescription"
                type="text"
                value={updatedDescription}
                onChange={(e) => {
                  setUpdatedDescription(e.target.value);
                }}
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
                    onChange={(e) => {
                      setUpdatedAssignee(e.target.value);
                    }}
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

export default ListItemCard;
