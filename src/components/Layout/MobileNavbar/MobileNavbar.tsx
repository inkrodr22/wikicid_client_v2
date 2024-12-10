import Hamburger from '~/assets/icons/hamburger-menu.svg?react';
import { IconButton } from '~/components/IconButton/IconButton.tsx';

export default function MobileNav() {

  return (
    <div>
      <IconButton
        icon={<Hamburger className='h-5 w-5 -translate-x-[1px] text-blue-primary '/>}
      />
      {/*Hay que agregar funcionamiento de barra*/}
    </div>
  );
}
