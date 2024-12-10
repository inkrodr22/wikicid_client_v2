import { useRef } from 'react';

export default function useDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  function handleOpen() {
    ref.current?.showModal();
  }

  function handleClose() {
    ref.current?.close();
  }

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    const dialog = event.target as HTMLDialogElement;
    // Close the dialog if the click is outside the aside or in an anchor tag (or any of its children)
    // More info about the closest method in events: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    if (dialog.closest('a') || dialog === ref.current) {
      handleClose();
    }
  }

  return {
    handleOpen,
    handleClose,
    handleClick,
    ref,
  };
}
