import React, { useState } from "react";

function Editing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (name.trim() === "") {
      formErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      formErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      formErrors.email = "Invalid email format";
    }

    if (age.trim() === "") {
      formErrors.age = "Age is required";
    } else if (age <= 0) {
      formErrors.age = "Age must be greater than 0";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(
        `✅ Profile Updated Successfully!\n\nName: ${name}\nEmail: ${email}\nAge: ${age}`
      );
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>User Profile Editing</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.age}</p>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Editing;
