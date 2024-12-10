// components/IconButton.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton.tsx';
import PaperPlane from '~/assets/icons/paper-plane.svg?react';
import Bell from '~/assets/icons/bell.svg?react';
import Hamburger from '~/assets/icons/hamburger-menu.svg?react';


const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' }, // Acción para visualizar los clics en Storybook
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const WithPaperPlane: Story = {
  args: {
    icon: <PaperPlane className="h-5 w-5 text-blue-primary" />,
    onClick: () => console.log('PaperPlane button clicked!'),
  },
};

export const WithBell: Story = {
  args: {
    icon: <Bell className="h-5 w-5 text-blue-primary" />,
    onClick: () => console.log('Bell button clicked!'),
  },
};

export const WithHamburger: Story = {
  args: {
    icon: <Hamburger className="h-5 w-5 text-blue-primary" />,
    onClick: () => console.log('Bell button clicked!'),
  },
};

