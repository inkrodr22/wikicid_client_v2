import PaperPlane from '~/assets/icons/paper-plane.svg?react';
import Bell from '~/assets/icons/bell.svg?react';
import { IconButton } from '~/components/IconButton/IconButton';


export default function Nav() {
  return (
    <nav className='ml-auto flex w-fit items-center justify-center gap-2 pr-4 text-blue-primary [grid-area:shortcuts]'>
      <IconButton
        icon={<PaperPlane className='h-5 w-5 -translate-x-[1px]' />}
      />
      <IconButton
        icon={<Bell className='h-5 w-5 -translate-x-[1px]' />}
      />
    </nav>
  );
}
