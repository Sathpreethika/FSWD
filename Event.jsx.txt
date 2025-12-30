import React from "react";

function Event() {

  const registerEvent = () => {
    // Collect user details
    const name = prompt("Enter your Name:");
    if (!name) {
      alert("Name is required!");
      return;
    }

    const email = prompt("Enter your Email:");
    if (!email) {
      alert("Email is required!");
      return;
    }

    const eventName = prompt(
      "Select Event:\n1. Technical Workshop\n2. Cultural Fest\n3. Sports Meet"
    );

    let selectedEvent = "";

    switch (eventName) {
      case "1":
        selectedEvent = "Technical Workshop";
        break;
      case "2":
        selectedEvent = "Cultural Fest";
        break;
      case "3":
        selectedEvent = "Sports Meet";
        break;
      default:
        alert("Invalid event selection!");
        return;
    }

    // Confirmation dialog
    const confirmRegistration = confirm(
      `Confirm Registration?\n\nName: ${name}\nEmail: ${email}\nEvent: ${selectedEvent}`
    );

    if (confirmRegistration) {
      alert("✅ Registration Successful!\nThank you for registering.");
    } else {
      alert("❌ Registration Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Event Registration System</h2>
      <button
        onClick={registerEvent}
        style={{ padding: "10px 25px", fontSize: "16px" }}
      >
        Register Event
      </button>
    </div>
  );
}

export default Event;
