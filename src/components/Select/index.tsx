import { ComponentProps, useId } from 'react';

type SelectTypes = ComponentProps<'select'> & {
  label: string;
};

export default function Select({ label, children, ...props }: SelectTypes) {
  const id = useId();

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id} className='font-semibold'>
        {label}
      </label>
      <select
        id={id}
        {...props}
        className='rounded-lg bg-gray-white p-2 text-blue-primary'
      >
        {children}
      </select>
    </div>
  );
}
