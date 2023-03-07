import React, { useState } from "react";

 export const InputField = (props) => {
  
  return (
    <div className="form-group">
      {props.label && <label htmlFor="input-field">{props.label}</label>}
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className="form-control w-75"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

