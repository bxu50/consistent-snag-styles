import React from "react";

export interface ButtonProps {
  label: string;
}

const RadioButton = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default RadioButton;