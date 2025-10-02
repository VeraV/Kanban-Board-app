import { useState } from "react";

function CardCreation({ handleAddCard }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "To Do",
    priority: "Low",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      ...formData,
      id: Date.now(),
      createdDate: new Date().toLocaleDateString(),
    };

    handleAddCard(newCard.status, newCard);

    setFormData({
      title: "",
      description: "",
      assignee: "",
      status: "To Do",
      priority: "Low",
      dueDate: "",
    });
  };

  return (
    <form className="add-item-form create-bar" onSubmit={handleFormSubmit}>
      <h3 className="title-new-item">Create New Item</h3>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        required
      />

      <input
        type="text"
        name="assignee"
        placeholder="Assignee"
        value={formData.assignee}
        onChange={handleInputChange}
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleInputChange}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <select
        name="priority"
        value={formData.priority}
        onChange={handleInputChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleInputChange}
      />

      <button type="submit">Create Item</button>
    </form>
  );
}

export default CardCreation;
