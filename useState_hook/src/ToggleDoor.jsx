// ToggleDoor.jsx
import { useState } from "react";

function ToggleDoor() {
  // This keeps track of the door state (OPEN or CLOSED)
  const [isOpen, setIsOpen] = useState(false);

  // Function to switch the door OPEN or CLOSED
  function toggleDoor() {
    setIsOpen(!isOpen);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>The door is {isOpen ? "OPEN" : "CLOSED"}</p>
      <button
        onClick={toggleDoor}
        style={{
          fontSize: "20px",
          padding: "10px",
          backgroundColor: isOpen ? "green" : "red",
          color: "white",
        }}
      >
        {isOpen ? "Close the Door" : "Open the Door"}
      </button>
    </div>
  );
}

export default ToggleDoor;
