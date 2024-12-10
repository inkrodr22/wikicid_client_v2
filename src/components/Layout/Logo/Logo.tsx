import logo from '~/assets/cid-logo.svg';

export default function Logo() {
  return (
    <div className='mr-auto grid place-content-center pl-4 [grid-area:logo] md:ml-0'>
      <img
        src={logo}
        alt='Centro de inteligencia digital'
        className='w-28 md:w-40'
      />
    </div>
  );
}
