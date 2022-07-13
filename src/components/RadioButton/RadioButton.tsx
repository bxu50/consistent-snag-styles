import React from "react";

export interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, name, value }) => {
  return (
    <>
        <input type='radio' id={id} name={name} value={value}/>
        <label htmlFor={id} className='bg-common-white py-3 pl-4 pr-14 relative before:absolute before:w-5 before:h-5 before:bg-common-black'>{label}</label>
    </>
    )
};

export default RadioButton;