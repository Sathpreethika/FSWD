import { useState } from "react";

export default function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🗂 Task List Dashboard</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />

      <button
        onClick={addTask}
        style={{ padding: "8px", marginLeft: "5px" }}
      >
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {t}
            <button
              onClick={() => removeTask(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
