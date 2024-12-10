import { ButtonProps } from './button.types.ts';
import { twMerge } from 'tailwind-merge';

export default function Button({
  children,
  variant: v,
  size: s,
  icon,
  className,
  ...props
}: ButtonProps) {
  const style = v ? variants[v] : variants.primary;
  const size = s ? sizes[s] : sizes.md;
  return (
    <button
      className={twMerge(
        icon && 'flex items-center gap-2.5',
        size,
        style,
        'rounded-lg',
        className
      )}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}

const variants = {
  primary: 'bg-blue-primary text-white',
  secondary: 'bg-blue-secondary text-blue-primary text-white',
  outline: 'border border-blue-primary text-blue-primary bg-white',
  unstyled: 'bg-gray-white text-blue-primary',
};

const sizes = {
  sm: 'px-2.5 py-2',
  md: 'px-2.5 py-3 text-lg',
  lg: 'px-4 py-2 text-xl',
};
