import React, { useState } from "react";

export default function ExamRegistrationForm() {
  const [fileName, setFileName] = useState("No file chosen");

  return (
    <div style={styles.box}>
      <form style={styles.form}>

        <h2 style={styles.title}>Online Exam Registration Form</h2>

        <label style={styles.label}>Full Name</label>
        <input type="text" placeholder="Enter your full name" style={styles.input} />

        <label style={styles.label}>Email</label>
        <input type="email" placeholder="Enter email" style={styles.input} />

        <label style={styles.label}>Create Password</label>
        <input type="password" placeholder="Set password" style={styles.input} />

        <label style={styles.label}>Exam Level</label>
        <select style={styles.input}>
          <option>Beginner Level</option>
          <option>Intermediate Level</option>
          <option>Advanced Level</option>
          <option>Scholarship Level</option>
        </select>

        <label style={styles.label}>Exam Mode</label>
        <div style={styles.row}>
          <label><input type="radio" name="mode" /> Online</label>
          <label><input type="radio" name="mode" /> Offline</label>
        </div>

        <label style={styles.label}>Select Subjects</label>
        <div style={styles.row}>
          <label><input type="checkbox" /> Mathematics</label>
          <label><input type="checkbox" /> Science</label>
          <label><input type="checkbox" /> General Knowledge</label>
        </div>

        <label style={styles.label}>Choose Exam Date</label>
        <input type="date" style={styles.input} />

        <label style={styles.label}>Upload Photo / ID</label>
        <input
          type="file"
          style={styles.file}
          onChange={(e) => {
            const file = e.target.files?.[0]?.name || "No file chosen";
            setFileName(file);
          }}
        />
        <p style={{ fontSize: "12px", marginTop: "-8px" }}>{fileName}</p>

        <label style={styles.label}>Address / Additional Notes</label>
        <textarea
          rows="3"
          placeholder="Enter address or comments here..."
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>Register Now</button>
      </form>
    </div>
  );
}

const styles = {
  box: { position: "relative", zIndex: 10 },
  form: {
    width: "430px",
    background: "rgba(255,255,255,0.15)",
    padding: "25px",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    color: "white",
    boxShadow: "0px 0px 18px rgba(0,0,0,0.7)",
  },
  title: {
    textAlign: "center",
    background: "#00C4FF",
    color: "black",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    marginTop: "10px",
    display: "block",    // <-- IMPORTANT FIX
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "5px",
    border: "none",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    marginBottom: "15px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  file: { marginBottom: "10px", color: "white" },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "17px",
    background: "#00F29E",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
