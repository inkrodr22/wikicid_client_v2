import React from 'react';
import Header from '~/components/Layout/Header/Header'; // Asegúrate de que la ruta sea correcta

export default {
  title: 'Layout/Header', // Define el título para Storybook
  component: Header, // Componente que quieres renderizar
};

const Template = (args) => <Header {...args} />; // Crea una plantilla para reutilizar

export const Default = Template.bind({}); // Exporta la historia principal
Default.args = {
  // Puedes agregar propiedades si el componente Header las requiere
};
