import React, { useState } from "react";

const values = [];

function Input() {
  const [value, changeValue] = useState("");

  function onChange(e) {
    changeValue(e.target.value);
  }

  function onClick(e) {
    e.preventDefault();
    if (value !== "") {
      values.push(value);
      changeValue("");
    }
  }

  return (
    <>
      <form>
        <input value={value} onChange={onChange}></input>
        <button onClick={onClick}>Add to list</button>
      </form>
      <ul>
        {values.map(value => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </>
  );
}

export default Input;
