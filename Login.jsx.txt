import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password || !role) {
      alert("❌ Please fill all fields");
      return;
    }

    // Simulated authentication
    if (password === "12345") {
      if (role === "admin") {
        setMessage("✅ Welcome Admin! Redirecting to Admin Dashboard...");
      } else {
        setMessage("✅ Welcome User! Redirecting to User Dashboard...");
      }
    } else {
      alert("❌ Invalid credentials");
      setMessage("");
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Role:</label><br />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Login
        </button>
      </form>

      {message && <p style={{ marginTop: "15px", color: "green" }}>{message}</p>}
    </div>
  );
}

export default Login;
