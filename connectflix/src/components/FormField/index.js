import React from "react";

function FormField({ label, name, type, value, onChange }) {
  return (
    <div>
      <label>
        <h3>{label} </h3>
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default FormField;
