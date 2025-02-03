import Input from "@/components/atoms/Input";
import React from "react";

const RadioButton = ({
  type,
  className = "rounded-full",
  placeholder,
  onChange,
  value,
  name,
  id,
  title,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        id={id}
      />
      <label htmlFor={id} className="cursor-pointer">
        {title}
      </label>
    </div>
  );
};

export default RadioButton;
