import React from "react";
import RadioButton from "../components/RadioButton";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args}/>
export const Default = Template.bind({});
Default.args = {
    id: 'buttonId',
    label: 'Label',
    name: 'Name',
    value: 'Value',
};