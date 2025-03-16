// App.jsx
import { useState } from "react";
import ToggleDoor from "./ToggleDoor";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Door Toggle App</h1>
      <ToggleDoor />
    </div>
  );
}
