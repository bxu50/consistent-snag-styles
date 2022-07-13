import React from "react";
import { render, screen } from "@testing-library/react";

import RadioButton, { RadioButtonProps } from "./RadioButton";

const sampleProps = {
  id: 'testId',
  label: 'testLabel',
  name: 'testName',
  value: 'testValue',
}

const setUp = (props:RadioButtonProps) => {
  render(
    <RadioButton {...props} />
  )
}

describe("RadioButton", () => {
  test("renders the RadioButton component", () => {
    setUp(sampleProps)
    expect(screen.getByRole('radio', { name: 'testLabel'})).toBeInTheDocument()
  });

  test('radio button selects the right value', () => {
    setUp(sampleProps)    
  })
});
