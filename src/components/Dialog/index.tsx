import { ComponentProps, forwardRef } from 'react';
import { createPortal } from 'react-dom';

// TODO: Con React 19 ya se elimina la necesidad de usar forwardRef
const Dialog = forwardRef<HTMLDialogElement, ComponentProps<'dialog'>>(
  ({ children, ...props }, ref) =>
    createPortal(
      <dialog ref={ref} {...props}>
        {children}
      </dialog>,
      document.getElementById('dialog-root')!
    )
);
export default Dialog;
