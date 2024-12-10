import { useEffect } from 'react';
import { Outlet, useMatches } from 'react-router-dom';
import NavbarIcons from 'src/components/Layout/Nav';
import Header from '~/components/Layout/Header';
import Aside from '~/components/Layout/Aside';
import Main from '~/components/Layout/Main';
import Logo from '~/components/Layout/Logo';
import TopBar from '~/components/TopBar/TopBar'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const matches = useMatches();
  const { handle, data } = matches[matches.length - 1] as {
    handle: { title: (data: unknown) => string };
    data: unknown;
  };
  const title = handle?.title(data);

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div className='grid h-svh grid-rows-[70px_60px_1fr_0] overflow-y-hidden [grid-template-areas:"logo_shortcuts""header_header""main_main""aside_aside"] lg:grid-cols-[350px_1fr_1fr] lg:grid-rows-[80px_1fr] lg:[grid-template-areas:"logo_header_header_shortcuts""aside_main_main_main"]'>
      <Main>
        <Outlet />
        {children}
      </Main>
      <TopBar/>
      <Aside />
    </div>
  );
}
