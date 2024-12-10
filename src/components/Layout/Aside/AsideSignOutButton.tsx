import Exit from '~/assets/icons/exit.svg?react';
import { useNavigate } from 'react-router-dom';

export default function AsideSignOutButton() {
  const navigate = useNavigate();

  async function signOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');

    navigate('/iniciar-sesion');
  }

  return (
    <button
      type='button'
      className='duration-350 -mx-5 flex w-full items-center gap-6 rounded-2xl p-5 py-2 text-blue-primary transition-all hover:bg-sky-100/50 hover:shadow-custom hover:duration-200'
      onClick={signOut}
    >
      <Exit className='h-6 w-6' />
      <span>Cerrar sesión</span>
    </button>
  );
}
