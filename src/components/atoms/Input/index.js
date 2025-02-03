import React from "react";

const Input = ({ type, className, placeholder, onChange, value, name, id }) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      id={id}
    />
  );
};

export default Input;
