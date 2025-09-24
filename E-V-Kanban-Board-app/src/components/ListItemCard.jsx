function ListItemCard({ item, handleRemoveCard }) {
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
    <div className="card">
      <section className={classListHeader}>
        <h4>{title}</h4>
        <div className="due-date">
          <p>Due:</p>
          <p>{dueDate}</p>
        </div>
        <span>{status === "Done" ? "✔️" : "❌"}</span>
      </section>
      <section className="cardBody">
        <p>{description}</p>
        <p>
          <i>
            <strong>Assigned to: </strong>
            {assignee}
          </i>
        </p>
      </section>
      <section className={classListFooter}>
        <p>Created: {createdDate}</p>
        <button
          onClick={() => {
            handleRemoveCard(id);
          }}
        >
          Delete
        </button>
      </section>

      {/*<p>Priority: {priority}</p>*/}
    </div>
  );
}

export default ListItemCard;
