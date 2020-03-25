import React, { useState } from "react";

function Input() {
  const [value, changeValue] = useState("");
  const [values, setValues] = useState([]);

  function onChange(e) {
    changeValue(e.target.value);
  }

  function onClick(e) {
    e.preventDefault();
    if (value !== "") {
      setValues(prevValues => [...prevValues, value]);
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
