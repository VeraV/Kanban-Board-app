function ListItemCard({
  item,
  handleRemoveCard,
  handleExpandCard,
  expanded,
  isSidebarOpen,
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
  const classListFooter = `cardFooter priority${priority}Footer`;

  //will use these emoji-s for the columns (also need a hird one for "in progress" status)
  //<span>{status === "Done" ? "✔️" : "❌"}</span>

  return (
    <div
      className={`card ${expanded ? "expanded" : ""}`}
      style={{
        transition: "transform 0.3s ease",
        transform: isSidebarOpen ? "translateX(250px)" : "translateX(0)",
      }}
    >
      {/* Header */}
      <section className={classListHeader}>
        <h4>{title}</h4>
        <div className="due-date">
          <i>
            <p>Due: {dueDate}</p>
          </i>
        </div>
      </section>

      {/* Body (only visible if expanded) */}
      {expanded && (
        <section className="cardBody">
          <p className="description">{description}</p>
          <p>
            <i>
              <strong>Assigned to: </strong>
              {assignee}
            </i>
          </p>
          <section className="card-bottom">
            <span>Created: {createdDate}</span>
            <button onClick={() => handleRemoveCard(id)}>Delete</button>
          </section>
        </section>
      )}

      {/* Footer */}
      <section className={classListFooter}>
        <button onClick={() => handleExpandCard(id)}>
          {expanded ? "Collapse" : "Expand"}
        </button>
      </section>
    </div>
  );
}

export default ListItemCard;
