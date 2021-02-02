import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;
const options = {
  Primary: 'hsl(49, 100%, 58%)',
  Secondary: 'hsl(196, 83%, 75%)',
  Tertiary: 'hsl(106, 47%, 64%)',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  backgroundColor: options.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor: options.Secondary,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'large',
  label: 'Button',
  backgroundColor: options.Tertiary,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
