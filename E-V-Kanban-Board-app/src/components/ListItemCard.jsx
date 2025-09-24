function ListItemCard({ item, handleRemoveCard, handleExpandCard, expanded }) {
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

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      {/* Header */}
      <section className={classListHeader}>
        <h4>{title}</h4>
        <div className="due-date">
          <p>Due:</p>
          <p>{dueDate}</p>
        </div>
        <span>{status === "Done" ? "✔️" : "❌"}</span>
      </section>

      {/* Body (only visible if expanded) */}
      {expanded && (
        <section className="cardBody">
          <p>{description}</p>
          <p>
            <i>
              <strong>Assigned to: </strong>
              {assignee}
            </i>
          </p>
        </section>
      )}

      {/* Footer */}
      <section className={classListFooter}>
        <p>Created: {createdDate}</p>
        <button onClick={() => handleRemoveCard(id)}>Delete</button>
        <button onClick={() => handleExpandCard(id)}>
          {expanded ? "Collapse" : "Expand"}
        </button>
      </section>
    </div>
  );
}

export default ListItemCard;
