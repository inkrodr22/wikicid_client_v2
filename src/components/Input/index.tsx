import { ComponentProps, useId, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import MagnifyingGlass from '~/assets/icons/magnifying-glass.svg?react';
import EmailIcon from '~/assets/icons/email-icon.svg?react';
import KeyIcon from '~/assets/icons/key-icon.svg?react';
import EyeIcon from '~/assets/icons/eye-icon.svg?react';
import clsx from 'clsx/lite';

type InputProps = ComponentProps<'input'> & {
  label?: string;
  variant?: string;
};

export default function Input({
  label,
  variant,
  required,
  className,
  ...props
}: InputProps) {
  const inputPasswordRef = useRef<HTMLInputElement | null>(null);
  const id = useId();

  function handlePasswordVisibility() {
    if (inputPasswordRef.current) {
      inputPasswordRef.current.type =
        inputPasswordRef.current.type === 'password' ? 'text' : 'password';
    }
  }

  if (variant === 'email') {
    return (
      <div className='flex flex-col gap-1'>
        <label htmlFor={id} className='font-semibold'>
          {label}
        </label>
        <div className='relative'>
          <EmailIcon className='absolute inset-y-0 left-4 h-full w-4 text-gray' />
          <input
            id={id}
            className={twMerge(
              'w-full rounded-lg bg-gray-white py-2 pl-[42px] pr-10 text-sm',
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }

  if (variant === 'password') {
    return (
      <div className='flex flex-col gap-1'>
        <label htmlFor={id} className='font-semibold'>
          {label}
        </label>
        <div className='relative flex'>
          <KeyIcon className='absolute inset-y-0 left-4 h-full w-4 text-gray' />
          <input
            ref={inputPasswordRef}
            className={twMerge(
              'w-full rounded-lg bg-gray-white py-2 pl-[42px] pr-10 text-sm',
              className
            )}
            {...props}
          />
          <button
            type='button'
            className='absolute inset-y-0 right-3.5'
            onClick={handlePasswordVisibility}
          >
            <EyeIcon className='w-4 stroke-[0.01px] text-gray' />
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'search') {
    return (
      <div className='flex w-full flex-col gap-1'>
        <label htmlFor={id} className='font-semibold'>
          {label}
        </label>
        <div className='relative flex'>
          <MagnifyingGlass className='absolute inset-y-0 left-4 h-full w-4 text-gray' />
          <input
            ref={inputPasswordRef}
            className={twMerge(
              'w-full rounded-lg bg-gray-white py-2 pl-[42px] pr-10 text-sm',
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }

  return (
    <div className='flex w-full flex-col gap-1'>
      <label
        htmlFor={id}
        className={clsx(
          'font-semibold',
          required && 'after:ml-0.5 after:content-["*"]'
        )}
      >
        {label}
      </label>
      <input
        id={id}
        className={twMerge(
          'w-full rounded-[10px] bg-gray-white px-4 py-2 text-sm',
          className
        )}
        {...props}
      />
    </div>
  );
}
