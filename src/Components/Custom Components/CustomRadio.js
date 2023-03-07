import React from "react";

function CustomRadio({  values, name }) {
  return (
    <div>
      {values.map((val,index) => {
        return (
          <div key={index}>
            <input type="radio" name={name} />
            <label htmlFor={name}>{val}</label>
          </div>
        );
      })}
    </div>
  );
}

export default CustomRadio;
