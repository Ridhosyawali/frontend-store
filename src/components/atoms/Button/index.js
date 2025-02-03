import React from "react";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  className = "bg-slate-800 text-white px-2 rounded-lg ",
  ref,
}) => {
  return (
    <button ref={ref} type={type} className={` ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
