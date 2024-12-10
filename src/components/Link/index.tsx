import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type LinkProps = ComponentProps<'a'>;
export default function Link({ className, children, ...props }: LinkProps) {
  return (
    <a {...props} className={twMerge('text-blue-primary underline', className)}>
      {children}
    </a>
  );
}
