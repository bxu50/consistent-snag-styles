import React from 'react';

export interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, name, value }) => (
  <>
    <input type="radio" id={id} name={name} value={value} />
    <label htmlFor={id} className="py-3 pl-4">{label}</label>
  </>
);

export default RadioButton;
