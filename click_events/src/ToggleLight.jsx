// ToggleLight.jsx
import { useState } from "react";

function ToggleLight() {
  // This keeps track of the light state (ON or OFF)
  const [isOn, setIsOn] = useState(false);

  // Function to switch the light ON or OFF
  function toggleLight() {
    setIsOn(!isOn);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>The light is {isOn ? "ON" : "OFF"}</p>
      <button
        onClick={toggleLight}
        style={{
          fontSize: "20px",
          padding: "10px",
          backgroundColor: isOn ? "yellow" : "gray",
          color: isOn ? "black" : "white",
        }}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default ToggleLight;
