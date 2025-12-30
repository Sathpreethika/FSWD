import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rating || !comments) {
      alert("❌ Please fill all fields");
      return;
    }

    setMessage("✅ Thank you! Your feedback has been submitted.");
    setName("");
    setRating("");
    setComments("");
  };

  return (
    <div style={{ width: "350px", margin: "100px auto" }}>
      <h2>Student Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Rating:</label><br />
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <div>
          <label>Comments:</label><br />
          <textarea
            rows="4"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit Feedback
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "15px", color: "green" }}>{message}</p>
      )}
    </div>
  );
}

export default Feedback;
