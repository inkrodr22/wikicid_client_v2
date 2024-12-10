import AsideDivider from '~/components/Layout/Aside/AsideDivider';
import AsideSection from '~/components/Layout/Aside/AsideSection';
import AsideProfile from '~/components/Layout/Aside/AsideProfile';
import {
  adminLinks,
  cidLinks,
} from '~/components/Layout/Aside/Aside.constants.ts';
import AsideSignOutButton from '~/components/Layout/Aside/AsideSignOutButton.tsx';

export default function Aside() {
  return (
    <aside className='overflow-y-auto p-6 [grid-area:aside]'>
      <nav className='flex flex-col gap-6'>
        <h3 className='mb-5 text-3xl font-bold text-blue-primary'>Menú</h3>
        <AsideDivider />
        <AsideSection title='Administrador' linkList={adminLinks} />
        <AsideDivider />
        <AsideSection title='CID' linkList={cidLinks} />
        <AsideDivider />
        <AsideDivider />
        <AsideSignOutButton />
      </nav>
    </aside>
  );
}
