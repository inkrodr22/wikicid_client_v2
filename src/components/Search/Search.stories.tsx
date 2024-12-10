import { Meta, Story } from '@storybook/react';
import Search from './Search.tsx'; // Ajusta la ruta según sea necesario

export default {
  title: 'Components/Search', // Título para Storybook
  component: Search,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto que aparece como placeholder en el campo de búsqueda',
    },
  },
} as Meta;

const Template: Story = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Buscar',
};
