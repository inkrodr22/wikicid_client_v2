import { Meta, Story } from '@storybook/react';
import Main from './Main'; // Importa el componente Main
import { LayoutProps } from '~/components/Layout/Layout.types'; // Importa las propiedades de Layout

// Definir la metadata de la historia
export default {
  title: 'Components/Main',
  component: Main,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta;

// Definir un caso de historia para el componente Main
const Template: Story<LayoutProps> = (args) => <Main {...args} />;

// Crear una historia con contenido dentro de Main
export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <h1>Bienvenido a una Card</h1>
      <p>Aqui se renderizan las pantallas de la plataforma.</p>
    </>
  ),
};
