// src/components/Layout/TopBar.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import TopBar from './TopBar';

const meta: Meta<typeof TopBar> = {
  title: 'Layout/TopBar',
  component: TopBar,
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    // Puedes pasar argumentos aquí si el componente tiene props para configurarlos
  },
};

export const WithLogoAndNav: Story = {
  args: {
    // Si quieres probar variantes o configuraciones específicas, ajusta los args.
  },
};
