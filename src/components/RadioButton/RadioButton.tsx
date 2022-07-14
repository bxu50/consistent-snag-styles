import React, { InputHTMLAttributes } from 'react';
import '../../lib/tailwind.scss';

export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
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
  ...otherProps
}) => (
  <>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      className="peer radio-button sr-only"
      {...otherProps}
    />
    <label
      htmlFor={id}
      className="py-4 pl-4 pr-14 bg-white border border-grey_3 border-solid text-primary-main text-sm font-bold relative before:absolute before:w-5 before:h-5 before:rounded-full before:border before:border-black before:border-solid before:right-4 before:top-3.5 hover:border-black"
    >
      {label}
    </label>
  </>
);

export default RadioButton;
