// components/IconButton.tsx

import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode; // El ícono (SVG o componente React)
  onClick?: () => void; // Función opcional para manejar clics
  className?: string; // Clases adicionales para estilos personalizados
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className = '',
})=> {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-gray-lighter p-2 px-3 hover:bg-gray-light focus:outline-none ${className}`}
    >
      {icon}
    </button>
  );
};
