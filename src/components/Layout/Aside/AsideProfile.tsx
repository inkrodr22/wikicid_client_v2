import { NavLink } from 'react-router-dom';
import UserNegative from '~/assets/icons/user-negative.svg?react';

export default function AsideProfile() {
  const img = undefined;
  return (
    <NavLink
      to='/perfil'
      className={({ isActive }) =>
        isActive
          ? 'flex w-full items-center gap-4 rounded-2xl bg-sky-100 font-semibold'
          : 'duration-350 flex w-full items-center gap-4 rounded-2xl text-blue-primary transition-all hover:bg-sky-100/50 hover:shadow-custom hover:duration-200'
      }
    >
      {img ? (
        <img
          src={img}
          alt=''
          className='h-20 w-20 rounded-full md:h-24 md:w-24'
        />
      ) : (
        <UserNegative className='h-10 text-blue-primary' />
      )}
      <span className='text-lg font-semibold text-blue-primary'>WikiCID</span>
    </NavLink>
  );
}
