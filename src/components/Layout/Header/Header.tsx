import MobileNav from '~/components/Layout/MobileNavbar';
import Search from '~/components/Search/Search';


export default function Header() {
  return (
    <header className='flex justify-between items-center px-4 py-2 w-full'>
      <MobileNav />
      <Search placeholder="Buscar"/>
    </header>
  );
}
