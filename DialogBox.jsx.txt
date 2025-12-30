import React from "react";

function DialogBox() {
  const reserveRoom = () => {
    const guestName = prompt("Enter Guest Name:");
    if (!guestName) {
      alert("Reservation failed: Guest name is required.");
      return;
    }

    const roomType = prompt("Enter Room Type (Single / Double / Deluxe):");
    if (!roomType) {
      alert("Reservation failed: Room type is required.");
      return;
    }

    const nights = prompt("Enter Number of Nights:");
    if (!nights || isNaN(nights)) {
      alert("Reservation failed: Enter a valid number of nights.");
      return;
    }

    const confirmReservation = confirm(
      `Confirm Reservation Details:\n\nGuest: ${guestName}\nRoom Type: ${roomType}\nNights: ${nights}`
    );

    if (confirmReservation) {
      alert(
        `✅ Reservation Successful!\n\nGuest: ${guestName}\nRoom: ${roomType}\nNights: ${nights}`
      );
    } else {
      alert("❌ Reservation Cancelled.");
    }
  };

  // Inline CSS styles
  const containerStyle = {
    marginTop: "30px",
  };

  const buttonStyle = {
    padding: "12px 25px",
    fontSize: "16px",
    backgroundColor: "#2c7be5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={reserveRoom}>
        Reserve Hotel Room
      </button>
    </div>
  );
}

export default DialogBox;
