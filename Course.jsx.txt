import React, { useState } from "react";

const Course = () => {
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [enrollments, setEnrollments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentName === "" || courseName === "") return;

    setEnrollments([
      ...enrollments,
      { student: studentName, course: courseName },
    ]);

    setStudentName("");
    setCourseName("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📚 Course Enrollment Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />

        <button style={styles.button} type="submit">
          Enroll
        </button>
      </form>

      <div style={styles.listBox}>
        <h3>🧾 Enrolled Students</h3>

        {enrollments.length === 0 && (
          <p>No enrollments yet.</p>
        )}

        <ul>
          {enrollments.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <strong>{item.student}</strong> enrolled in{" "}
              <span>{item.course}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "420px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#ffffff",
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
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px",
    marginTop: "10px",
  },
  listBox: {
    marginTop: "25px",
  },
  listItem: {
    backgroundColor: "#f4f6f8",
    padding: "8px",
    borderRadius: "5px",
    marginBottom: "8px",
  },
};

export default Course;
