import React, { useState } from "react";

function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password) {
      alert("❌ Username and Password are required");
      return;
    }

    // Simulated authentication logic
    if (username === "admin" && password === "admin123") {
      setStatus("✅ Login Successful! Welcome Admin.");
    } else if (username === "user" && password === "user123") {
      setStatus("✅ Login Successful! Welcome User.");
    } else {
      alert("❌ Authentication Failed! Invalid credentials");
      setStatus("");
    }
  };

  return (
    <div style={{ width: "320px", margin: "100px auto" }}>
      <h2>Basic Authentication System</h2>

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

        <button type="submit" style={{ marginTop: "10px" }}>
          Login
        </button>
      </form>

      {status && (
        <p style={{ marginTop: "15px", color: "green" }}>{status}</p>
      )}
    </div>
  );
}

export default Authentication;
