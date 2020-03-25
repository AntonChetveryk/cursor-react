import React, { useState } from "react";

function Button() {
  const [isActive, updateIsActive] = useState(true);
  return (
    <button onClick={() => updateIsActive(!isActive)}>
      {isActive ? "active" : "disable"}
    </button>
  );
}

export default Button;
