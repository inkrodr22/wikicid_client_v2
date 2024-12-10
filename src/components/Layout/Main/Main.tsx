import { LayoutProps } from '~/components/Layout/Layout.types.ts';

export default function Main({ children }: LayoutProps) {
  return (
    <main className='mx-2 mb-0 overflow-y-auto rounded-t-2xl bg-gray-lighter p-[15px] drop-shadow-sm [grid-area:main] lg:ml-0 lg:rounded-tl-2xl'>
      <section className='mx-auto min-h-full rounded-2xl bg-white p-4 shadow-lg'>
        {children}
      </section>
    </main>
  );
}
