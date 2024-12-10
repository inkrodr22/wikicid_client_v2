import Header from '~/components/Layout/Header/Header';
import NavbarIcons from '~/components/Layout/Nav/Nav';
import Logo from '~/components/Layout/Logo/Logo';

export default function TopBar() {
  return (
    <div className="flex flex-col bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2">
        <Logo />
        <NavbarIcons />
      </div>
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
}
