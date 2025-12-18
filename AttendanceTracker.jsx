import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Alice", present: false },
  { id: 2, name: "Bob", present: true },
  { id: 3, name: "Charlie", present: false },
  { id: 4, name: "David", present: true },
];

export default function AttendanceTracker() {
  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📋 Attendance Tracker</h2>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            marginBottom: "8px",
            borderRadius: "5px",
            backgroundColor: student.present ? "#d4edda" : "#f8d7da",
          }}
        >
          <span>{student.name}</span>

          <button
            onClick={() => toggleAttendance(student.id)}
            style={{
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            {student.present ? "Present ✅" : "Absent ❌"}
          </button>
        </div>
      ))}
    </div>
  );
}
