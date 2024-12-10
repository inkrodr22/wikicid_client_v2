import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './index'; // Ruta del componente
import { ButtonProps } from './button.types';

export default {
  title: 'Components/Button', // Categoría y nombre en Storybook
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline', 'unstyled'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    icon: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: 'text',
      defaultValue: 'Click Me',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  children: 'Secondary Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'md',
  children: 'Outline Button',
};

export const Unstyled = Template.bind({});
Unstyled.args = {
  variant: 'unstyled',
  size: 'md',
  children: 'Unstyled Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'primary',
  size: 'md',
  icon: <span>🔥</span>,
  children: 'Button with Icon',
};
