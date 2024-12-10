import { ChangeEvent, ComponentProps, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx/lite';

type TextareaTypes = ComponentProps<'textarea'> & {
  label: string;
};

export default function Textarea({
  label,
  onChange,
  required,
  className,
  ...props
}: TextareaTypes) {
  const [count, setCount] = useState<number>(0);
  const id = useId();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    onChange && onChange(e);
    setCount(e.target.value.length);
  }

  return (
    <div className='flex flex-col gap-2'>
      <label
        htmlFor={id}
        className={clsx(
          required && 'after:ml-0.5 after:content-["*"]',
          'font-semibold'
        )}
      >
        {label}
      </label>
      <textarea
        id={id}
        onChange={handleChange}
        maxLength={300}
        className={twMerge('rounded-lg bg-gray-white px-4 py-2', className)}
        {...props}
      />
      <small className='text-gray-500 self-end'>{count}/300</small>
    </div>
  );
}
