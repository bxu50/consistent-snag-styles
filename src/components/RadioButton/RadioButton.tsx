import React from "react";

export interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  name,
  value,
}) => (
  <>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      className="invisible"
    />
    <label
      htmlFor={id}
      className="py-3.5 pl-4 pr-14 bg-white border border-black border-solid text-primary-main text-sm relative before:absolute before:w-5 before:h-5 before:rounded-full before:border before:border-black before:border-solid before:right-4 before:top-4"
    >
      {label}
    </label>
  </>
);

export default RadioButton;
