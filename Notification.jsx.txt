import React, { useState } from "react";

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(1);

  const addNotification = () => {
    const newNotification = `🔔 New Notification ${count}`;
    setNotifications([...notifications, newNotification]);
    setCount(count + 1);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div style={{ width: "400px", margin: "100px auto" }}>
      <h2>Dashboard Notifications</h2>

      <button onClick={addNotification} style={{ marginRight: "10px" }}>
        Add Notification
      </button>

      <button onClick={clearNotifications}>
        Clear All
      </button>

      <hr />

      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}

      <p>
        <b>Total Notifications:</b> {notifications.length}
      </p>
    </div>
  );
}

export default Notification;
