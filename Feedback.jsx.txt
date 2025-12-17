import React, { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || message.trim() === "") return;

    setFeedbackList([
      ...feedbackList,
      { name: name, message: message },
    ]);

    setName("");
    setMessage("");
  };

  const styles = {
    container: {
      width: "450px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "cyan",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "8px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "purple",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "15px",
      marginTop: "10px",
    },
    feedbackBox: {
      marginTop: "25px",
    },
    feedbackItem: {
      backgroundColor: "#f4f6f8",
      padding: "10px",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    name: {
      fontWeight: "bold",
      color: "#333",
    },
    message: {
      marginTop: "5px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}> Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          style={styles.input}
          rows="4"
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button style={styles.button} type="submit">
          Submit Feedback
        </button>
      </form>

      <div style={styles.feedbackBox}>
        <h3> Submitted Feedback</h3>

        {feedbackList.length === 0 && (
          <p>No feedback submitted yet.</p>
        )}

        {feedbackList.map((item, index) => (
          <div key={index} style={styles.feedbackItem}>
            <div style={styles.name}>{item.name}</div>
            <div style={styles.message}>{item.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
