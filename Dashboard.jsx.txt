import React, { useState } from "react";

function Dashboard() {
  const [view, setView] = useState("home");

  const students = [
    { id: 1, name: "Arun", course: "Full Stack", year: 2 },
    { id: 2, name: "Divya", course: "Data Science", year: 3 },
    { id: 3, name: "Karthik", course: "AI & ML", year: 1 },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Navigation */}
      <div
        style={{
          width: "200px",
          background: "#2c3e50",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h3>Dashboard</h3>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setView("home")}
        >
          Home
        </p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setView("students")}
        >
          Students
        </p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setView("about")}
        >
          About
        </p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {view === "home" && (
          <>
            <h2>Welcome to Student Management System</h2>
            <p>Use the navigation menu to view student details.</p>
          </>
        )}

        {view === "students" && (
          <>
            <h2>Student List</h2>
            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {students.map((stu) => (
                  <tr key={stu.id}>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.course}</td>
                    <td>{stu.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {view === "about" && (
          <>
            <h2>About</h2>
            <p>
              This is a simple student management dashboard built using
              React as part of full-stack web development.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
