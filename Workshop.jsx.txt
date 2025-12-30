import React, { useState } from "react";

function Workshop() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !topic || !level) {
      alert("❌ Please fill all fields");
      return;
    }

    alert("✅ Workshop Registration Successful!");
    setSubmitted(true);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "60px" }}>
      
      {/* Registration Form */}
      <div>
        <h2>Online Workshop Registration</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Workshop Topic:</label><br />
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value="">Select</option>
              <option value="React Basics">React Basics</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>

          <div>
            <label>Skill Level:</label><br />
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <button type="submit" style={{ marginTop: "10px" }}>
            Register
          </button>
        </form>
      </div>

      {/* Live Preview */}
      <div>
        <h2>Live Preview</h2>
        <p><b>Name:</b> {name || "—"}</p>
        <p><b>Email:</b> {email || "—"}</p>
        <p><b>Topic:</b> {topic || "—"}</p>
        <p><b>Level:</b> {level || "—"}</p>

        {submitted && <p style={{ color: "green" }}>✔ Registration Submitted</p>}
      </div>

    </div>
  );
}

export default Workshop;
