import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Home page
function Home() {
  return <h2>Welcome to Student Dashboard</h2>;
}

// Students page
function Students() {
  const students = [
    { id: 1, name: "Arun", course: "Full Stack" },
    { id: 2, name: "Divya", course: "Data Science" },
    { id: 3, name: "Karthik", course: "AI & ML" },
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} – {s.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

// About page
function About() {
  return <h2>About This Dashboard</h2>;
}

// Multipage dashboard component
function Multipage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          background: "#34495e",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h3>Dashboard</h3>
        <p>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </p>
        <p>
          <Link to="/students" style={{ color: "#fff", textDecoration: "none" }}>
            Students
          </Link>
        </p>
        <p>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
            About
          </Link>
        </p>
      </div>

      {/* Page Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default Multipage;
