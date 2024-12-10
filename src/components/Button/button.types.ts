import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'unstyled';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
};
