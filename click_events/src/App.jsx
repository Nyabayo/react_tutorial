// App.jsx
import { useState } from "react";
import ToggleLight from "./ToggleLight";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Light Switch App</h1>
      <ToggleLight />
    </div>
  );
}
