import React from "react";

function CabBooking() {

  const bookCab = () => {
    // Get user details using prompt
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Name is required!");
      return;
    }

    const pickup = prompt("Enter pickup location:");
    if (!pickup) {
      alert("Pickup location is required!");
      return;
    }

    const drop = prompt("Enter drop location:");
    if (!drop) {
      alert("Drop location is required!");
      return;
    }

    const cabType = prompt(
      "Choose Cab Type:\n1. Mini\n2. Sedan\n3. SUV"
    );

    let fare = 0;
    let selectedCab = "";

    switch (cabType) {
      case "1":
        selectedCab = "Mini";
        fare = 150;
        break;
      case "2":
        selectedCab = "Sedan";
        fare = 250;
        break;
      case "3":
        selectedCab = "SUV";
        fare = 350;
        break;
      default:
        alert("Invalid cab type!");
        return;
    }

    // Confirm booking
    const confirmBooking = confirm(
      `Confirm Booking?\n\nName: ${name}\nPickup: ${pickup}\nDrop: ${drop}\nCab: ${selectedCab}\nFare: ₹${fare}`
    );

    if (confirmBooking) {
      alert("🚕 Cab booked successfully!\nDriver will contact you soon.");
    } else {
      alert("Cab booking cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Online Cab Booking Application</h2>
      <button onClick={bookCab} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Book Cab
      </button>
    </div>
  );
}

export default CabBooking;
